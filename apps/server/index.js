const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth/login.auth.routes");
const config = require("./config");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

// Session setup
app.use(express.json());

// Use authentication routes
app.use("/auth", authRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("Logged out");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
