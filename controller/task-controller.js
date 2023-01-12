const getAllTasks = (req, res) => {
  res.send("All tasks gotten!!!!!!!!!");
};

const createTask = (req, res) => {
  res.send("Task created succesfully");
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
