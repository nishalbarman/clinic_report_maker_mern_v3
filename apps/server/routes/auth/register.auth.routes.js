const express = require("express");
const router = express.Router();

// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const { ImageUploadHelper } = require("../../helper/imgUploadhelpter");

const UserModel = require("../../models/User.mode");
const { globalErrorHandler } = require("../../utils");

// const JWT_SECRET = process.env.JWT_SECRET;

router.post("/register", async (req, res) => {
  const { name, email, phone, password, pic } = req.body;

  try {
    const profilePic = await ImageUploadHelper.uploadBulkImages(
      pic,
      "/report_maker/profile"
    );

    const newUser = await UserModel.create({
      name: name,
      email: email,
      phone: phone,
      password: password,
      image: profilePic[0],
    });

    if (!newUser) {
      return globalErrorHandler({
        res,
        message: "Registration failed, please try again",
        statusCode: "500",
      });
    }
    // const token = jwt.sign(
    //   { _id: newUser._id, role: newUser.role, email: email, phone: phone },
    //   JWT_SECRET,
    //   { expiresIn: "1h" }
    // );

    res.json({
      message: "Registration Successful, You May Login Now.",
    });
  } catch (error) {
    return globalErrorHandler({
      res,
      error,
    });
  }
});

module.exports = router;
