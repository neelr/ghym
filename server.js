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
Job.find({ peer_id: "mbdsUXLeEuLtA_HgAAAI" }).remove().exec();
io.on("connection", socket => {
  socket.on("disconnect", () => {
    console.log("disconn");
    Worker.find({ peer_id: socket.id }).remove().exec();
    Job.find({ peer_id: socket.id }).remove().exec();
  });
  socket.on("done", async data => {
    console.log("Done with ", data);
    console.log(data.socket)
    io.to(data.socket).emit("done", data);
    console.log(socket.id)
    Worker.findOne({ peer_id: socket.id }, (err,doc) => {
      doc.is_running = !doc.is_running
      doc.save()
    })
    Job.find({ peer_id: data.socket }).remove().exec();
  });
});
app.get("/", (req, res) => {
  res.send("Heyo! Server is up and running! Be sure to check Ghym out soon!");
});

app.post("/new_node", async (req, res) => {
  Worker.findOne({ peer_id: req.body.id}, async (err, docs) => {
  console.log(docs)
    if (!docs) {
    var new_worker = new Worker({
      name: req.body.name,
      ram: req.body.ram,
      is_running: false,
      peer_id: req.body.id
    });
    console.log(new_worker.ram);
    var job = await new Promise((resolve,rej) => { Job.findOne({ ram: { $lte: new_worker.ram }, is_running: false }, (err, res) => {
        resolve(res)
      })})
    if (job) {
        new_worker.is_running = true;
        io.to(new_worker.peer_id).emit("job", {
          code: job.code,
          socket: job.peer_id,
          name: job.job_name
        });
        job.is_running = true;
        job.save();
      }
    new_worker.save();
    res.send({ id: new_worker.id });
    } else {
    console.log("YEETED")
    res.send("Two instances not allowed")
    }
  })
});

app.post("/deactivate_node", (req, res) => {
  Worker.findById(req.body.id)
    .remove()
    .exec();
  res.sendStatus(200);
});

app.post("/queue_job", async (req, res) => {
  var job = new Job({
    job_name: req.body.name,
    peer_id: req.body.id,
    is_running: false,
    ram: req.body.ram,
    code: req.body.code
  });
  const worker = await new Promise((resolve) => Worker.findOne({ ram: { $gte: job.ram }, is_running: false }, (err, res) => {
      if (err) {
      reject(err);
      return;
      } 
      
      resolve(res);
    }
  ))
  
  if (worker) {
  console.log(worker.peer_id)
        io.to(worker.peer_id).emit("job", {
          code: job.code,
          socket: job.peer_id,
          name: job.job_name
        });
        worker.is_running = true;
        worker.save();
        job.is_running = true;
  }
  
  job.save();
  res.sendStatus(200);
});
app.get("/active_jobs", async (req, res) => {
  x = await Job.find({})
  res.send(x)
})

app.get("/active_workers", async (req, res) => {
  x = await Worker.find({})
  res.send(x)
})

http.listen(3000, () => console.log("Up and running on port 3000!!!"));
