const CustomAPIError = require("./custom-api");

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message); // Add a "message" property
    this.statusCode = 400; // Bad Request Status Code
  }
}

module.exports = BadRequestError;
