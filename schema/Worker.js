const mongoose = require("mongoose")
let schema = mongoose.Schema

let workerSchema = new schema({
    ram: Number,
    is_running: Boolean,
    peer_id:String,
    name: String,
});

module.exports =  workerSchema