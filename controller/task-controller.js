const getAllTasks = (req, res) => {
  res.send("All tasks gotten!!!!!!!!!");
};

const createTask = (req, res) => {
  res.send("Task created succesfully");
};

module.exports = {
  getAllTasks,
  createTask,
};
