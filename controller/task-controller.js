const Task = require("../models/task-model");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-errors");

const getAllTasks = asyncWrapper(async (req, res) => {
  const task = await Task.find();
  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  // const taskId = req.params.id;
  // const task = await Task.findById(taskId);
  // res.status(200).json({
  //   status: "success",
  //   data: {
  //     task,
  //   },
  // });

  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.updateOne({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.deleteOne({ _id: taskId });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskId}`, 404));
  }
  res.status(200).json({ message: null });
});

const editTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.updateOne({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskId}` });
  }
  res.status(200).json({ task });
});

module.exports({
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
});
