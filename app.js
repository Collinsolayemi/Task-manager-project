const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks-routes");

// app.get("/api/v1/task", (req, res) => {
//   res.send("task manager running");
// });

app.use("/api/v1/tasks", taskRoute);

const port = 5500;
app.listen(port, () => {
  {
    console.log(`server running on port ${port}`);
  }
});
