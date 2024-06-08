const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// ANSI escape codes for text color
const red = "\x1b[31m";
const green = "\x1b[32m";
const reset = "\x1b[0m";

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(green, "MongoDB connected", reset))
  .catch((err) => {
    console.log(red, err, reset);
    process.exit(1);
  });

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// Use authentication routes
app.use("/auth/login", require("./routes/auth/login.routes"));
app.use("/auth/register", require("./routes/auth/register.routes"));

app.use("/templates", require("./routes/templates/templates.routes"));
app.use("/users", require("./routes/users/users.routes"));
app.use("/patient-report", require("./routes/patient-report/patient-report.routes"));

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
