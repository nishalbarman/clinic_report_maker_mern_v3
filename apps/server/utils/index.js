const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const getTokenDetails = (token) => {
  try {
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    console.error("JWT Decode Error -->", err);
    return null;
  }
};

const globalErrorHandler = ({
  res,
  error,
  statusCode = 500,
  message = undefined,
}) => {
  console.error(error);
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
