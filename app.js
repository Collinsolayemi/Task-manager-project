const express = require("express");
const app = express();
const task = require("./routes/tasks-routes");

//middleware
app.use(express.json());

app.use("/api/v1/tasks", task);

const port = 5500;
app.listen(port, () => {
  {
    console.log(`server running on port ${port}`);
  }
});
