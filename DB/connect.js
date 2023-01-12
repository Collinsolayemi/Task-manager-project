const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .set("strictQuery", false)
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("conneccted");
    });
};

module.exports = connectDB;
