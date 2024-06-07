const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// ANSI escape codes for text color
const red = "\x1b[31m";
const green = "\x1b[32m";
const reset = "\x1b[0m";

const getTokenDetails = (token) => {
  try {
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    console.error(red, "JWT Decode Error -->", err, reset);
    return null;
  }
};

const globalErrorHandler = ({
  res,
  error,
  statusCode = 500,
  message = undefined,
}) => {
  console.error(red, error, reset);
  if (error !== undefined && error instanceof mongoose.Error && error?.errors) {
    const errArray = Object.values(error.errors).map(
      (properties) => properties.message
    );

    return res.status(400).json({
      message: errArray.join(", "),
    });
  }
  return res.status(statusCode).json({
    message: !message ? error.message : message || "Internal server error",
  });
};

module.exports = { globalErrorHandler, getTokenDetails };
