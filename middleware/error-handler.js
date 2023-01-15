const { CustomApiError } = require("../errors/custom-errors");

//creating a middleware to handle the error
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ message: "Something went wrong try again" });
};

module.exports = errorHandlerMiddleware;
