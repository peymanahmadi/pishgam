const CustomAPIError = require("./custom-api");

class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message); // Add a "message" property
    this.statusCode = 401; // UnAuthorized Code
  }
}

module.exports = UnAuthenticatedError;
