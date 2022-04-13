const express = require("express");
//Express Router
const router = express.Router();
const Schema = require("./schemas");

//Get all logs
router.get("/", async (req, res) => {
  try {
    const user = await Schema.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: err.message, status: "error" });
  }
});

//Get log by id
router.get("/:id", async (req, res) => {
  try {
    const user = await Schema.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: err.message, status: "error" });
  }
});

//Create log
//Post One
router.post("/", async (req, res) => {
  const add_log = new Schema({
    call_time: req.body.call_time,
    call_direction: req.body.call_direction,
    called_number: req.body.called_number,
    call_duration: req.body.call_duration,
    call_transfer_duration: req.body.call_transfer_duration,
    call_uuid: req.body.call_uuid,
    call_status: req.body.call_status,
    call_transfer_status: req.body.call_transfer_status,
    agent_list: req.body.agent_list,
    agent_number: req.body.agent_number,
    menu: req.body.menu,
    agent_name: req.body.agent_name,
    agent_status: req.body.agent_status,
  });
  try {
    const new_log = await add_log.save();
    res.status(201).json(new_log);
  } catch (error) {
    res.status(500).json({ message: error.message, status: "error" });
  }
});

//Delete log
router.delete("/:id", async (req, res) => {
  try {
    const Logs = await Schema.findByIdAndDelete(req.params.id);
    if (!Logs) {
      return res
        .status(404)
        .json({ message: "Log not found", status: "error" });
    }
    res.json({ message: "Log deleted", status: "success" });
  } catch (error) {
    res.status(500).json({ message: err.message, status: "error" });
  }
});

//Delete all logs
router.delete("/", async (req, res) => {
  try {
    const Logs = await Schema.deleteMany();
    res.json({ message: "All Logs deleted", status: "success" });
  } catch (error) {
    res.status(500).json({ message: err.message, status: "error" });
  }
});

module.exports = router;
