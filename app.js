const express = require("express");
const app = express();
const task = require("./routes/tasks-routes");
const connectDB = require("./DB/connect");
require("dotenv").config();
//middleware
app.use(express.static("./frontend-data"));

app.use(express.json());

app.use("/api/v1/tasks", task);

const port = 5500;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      {
        console.log(`server running on port ${port}`);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

start();
