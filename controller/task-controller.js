const Task = require("../models/task-model");

const getAllTasks = (req, res) => {
  res.send("All tasks gotten!!!!!!!!!");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

const getTask = (req, res) => {
  res.send("task gotten");
};

const updateTask = (req, res) => {
  res.send("Task updated succesfully");
};

const deleteTask = (req, res) => {
  res.send("Task deleted succesfully");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
