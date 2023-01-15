//contructor function to handle the msg and status of errors
class CustomApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomApiError(msg, statusCode);
};

module.exports = { CustomApiError, createCustomError };
