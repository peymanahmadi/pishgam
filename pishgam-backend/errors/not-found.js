const CustomAPIError = require("./custom-api");

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message); // Add a "message" property
    this.statusCode = 404; // Not Found Status Code
  }
}

module.exports = NotFoundError;
