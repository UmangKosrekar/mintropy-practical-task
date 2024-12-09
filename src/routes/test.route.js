const { Router } = require("express");
const { responseHandler, CustomError } = require("../helper");
const app = Router();

app.all("/running", (req, res, next) => {
  try {
    responseHandler(res, 200, "Up and running");
  } catch (error) {
    next(error);
  }
});

app.all("/error", (req, res, next) => {
  try {
    throw new CustomError(
      "Errors working properly",
      errorCodes.BAD_REQUEST,
      400
    );
  } catch (error) {
    next(error);
  }
});

module.exports = app;
