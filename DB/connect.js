const mongoose = require("mongoose");

const connectionStr =
  "mongodb+srv://collinsolayemi1995:faVZjguOY5LMJ3Ih@cluster0.emmrqq8.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose
    .set("strictQuery", false)
    .connect(connectionStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("conneccted");
    });
};

module.exports = connectDB;

connectDB();
