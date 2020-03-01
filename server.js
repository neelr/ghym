require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const WorkerSchema = require("./schema/Worker");
const JobScheme = require("./schema/Job");
const app = express();
const cors = require("cors");
var http = require("http").Server(app);
var io = require("socket.io")(http);
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var Worker = mongoose.model("Workers", WorkerSchema);
var Job = mongoose.model("Jobs", JobScheme);

const JobWatch = Job.watch().on("change", data => {
  if (data.fullDocument && !data.fullDocument.is_running) {
    Worker.findOne({ ram: { $gte: data.fullDocument.ram }, is_running:false }).exec(
      (err, res) => {
        if (res) {
            Job.findById(data.documentKey._id,(_,doc) => {
                doc.is_running = true;
                doc.save()
            })
          io.to(res.peer_id).emit("job", {
            code: data.fullDocument.code,
            socket: data.fullDocument.peer_id,
            name: data.fullDocument.name
          });
          res.is_running = true;
          res.save()
        }
      }
    );
  }
});

const WorkerWatch = Worker.watch().on("change", data => {
  if (data.fullDocument && !data.fullDocument.is_running) {
    Job.findOne({ ram: { $lt: data.fullDocument.ram }, is_running:false  }).exec((err, res) => {
      if (res) {
        Worker.findById(data.documentKey._id,(_,doc) => {
            doc.is_running = true;
            doc.save()
        })
        io.to(data.fullDocument.peer_id).emit("job", {
          code: res.code,
          socket: res.peer_id,
          name: res.name
        });
        res.is_running = true;
        res.save()
      }
    });
  }
});

io.on("connection", socket => {
  socket.on("disconnect", () => {
  console.log("looped")
    Worker.findOne({ peer_id: socket.id })
      .remove()
      .exec();
    Job.findOne({ peer_id: socket.id })
      .remove()
      .exec();
  });
  socket.on("done", data => {
    io.to(data.socket).emit("done", { name: data.name });
  });
});
app.get("/", (req, res) => {
  res.send("Heyo! Server is up and running! Be sure to check Ghym out soon!");
});

app.post("/new_node", (req, res) => {
  var new_worker = new Worker({
    name: req.body.name,
    ram: req.body.ram,
    is_running: false,
    peer_id: req.body.id
  });
  new_worker.save();
  res.send({ id: new_worker.id });
});

app.post("/deactivate_node", (req, res) => {
  Worker.findById(req.body.id)
    .remove()
    .exec();
  res.sendStatus(200);
});

app.post("/queue_job", (req, res) => {
  Job.create({
    job_name: req.body.name,
    peer_id: req.body.id,
    is_running: false,
    ram: req.body.ram,
    code: req.body.code
  });
  res.sendStatus(200);
});

app.get("/active_jobs", (req, res) => {
  if(err){
    res.send(err)
  }
  res.send(Job.find({}))
})

app.get("/active_workers", (req, res) => {
  if(err){
    res.send(err)
  }
  res.send(Worker.find({}))
})

http.listen(3000, () => console.log("Up and running on port 3000!!!"));
