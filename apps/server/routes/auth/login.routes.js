const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const jwt = require("jsonwebtoken");

const UserModel = require("../../models/User.mode");
const { globalErrorHandler } = require("../../utils");

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.log("jwt secret not found");
  process.exit(1);
}

router.post("/", async (req, res) => {
  try {
    console.log("I am here");

    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return globalErrorHandler({
        res,
        statusCode: 401,
        message: "Invalid credentials",
      });
    }

    const isPasswordMatched = bcrypt.compareSync(password, user.password);

    if (user && isPasswordMatched) {
      const token = jwt.sign(
        {
          _id: user._id,
          role: user.role,
          email: user.email,
          phone: user.phone,
        },
        JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res.json({
        message: "Login successful",
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          pic: user.image,
          token,
        },
      });
    } else {
      return globalErrorHandler({
        res,
        message: "Invalid credentials",
        statusCode: 401,
      });
    }
  } catch (error) {
    return globalErrorHandler({
      res,
      error,
      statusCode: 500,
      message: undefined,
    });
  }
});

module.exports = router;
