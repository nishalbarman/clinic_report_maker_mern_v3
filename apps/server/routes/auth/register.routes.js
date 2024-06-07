const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const { FirebaseUtils } = require("firebase-utils");

const UserModel = require("../../models/User.mode");
const { globalErrorHandler } = require("../../utils");

router.post("/", async (req, res) => {
  const { name, email, phone, password, pic } = req.body;

  try {
    const profilePic = await FirebaseUtils.uploadBulkImages(
      pic,
      "/report_maker/profile"
    );

    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await UserModel.create({
      name: name,
      email: email,
      phone: phone,
      password: hashedPassword,
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
