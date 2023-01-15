const express = require("express");
const app = express();
const task = require("./routes/tasks-routes");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./DB/connect");
require("dotenv").config();

//middleware
app.use(express.static("./views"));
app.use(express.json());
app.use("/api/v1/tasks", task);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5500;

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
