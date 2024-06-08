const express = require("express");
const router = express.Router();

const checkRole = require("../../middlewares");

const { globalErrorHandler } = require("../../utils");

const UserModel = require("../../models/User.model");

router.get("/list", checkRole(0, 1), async (req, res) => {
  try {
    const users = await UserModel.find();

    return res.json({ users });
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
