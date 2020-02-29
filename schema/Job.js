const mongoose = require("mongoose")
let schema = mongoose.Schema

let jobSchema = new schema({
    job_name: String,    
    user_id: String,
    is_running: Boolean,
    ram: Number,
    code: String,
    peer_id:String
});

module.exports = jobSchema