const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");

const UserModel = require("../../models/User.mode");

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.log("jwt secret not found");
  process.exit(1);
}

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.find({ email });

    if (user && (await user.comparePassword(password))) {
      const token = jwt.sign({ _id: user._id, role: user.role }, JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({
        message: "Login successful",
        token,
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          profile: user.image,
        },
      });
    } else {
      return handleGlobalError({
        res,
        message: "Invalid credentials",
        statusCode: 401,
      });
    }
  } catch (error) {
    return handleGlobalError({
      res,
      error,
      statusCode: 500,
      message: undefined,
    });
  }
});

module.exports = router;
