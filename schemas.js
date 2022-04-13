const mongoose = require("mongoose");

//Schema for add to cart
const LogSchema = new mongoose.Schema({
  call_date: {
    type: Date,
    required: true,
  },
  call_time: {
    type: String,
    required: true,
  },
  call_direction: {
    type: String,
    required: true,
  },
  called_number: {
    type: String,
  },
  call_duration: {
    type: String,
  },
  call_transfer_duration: {
    type: String,
  },
  call_uuid: {
    type: String,
    required: true,
  },
  call_status: {
    type: String,
    required: true,
  },
  call_transfer_status: {
    type: String,
  },
  agent_list: {
    type: String,
  },
  agent_number: {
    type: String,
  },
  menu: {
    type: String,
  },
  agent_name: {
    type: String,
  },
  agent_status: {
    type: String,
  },
});

module.exports = mongoose.model("calls_log", LogSchema);
