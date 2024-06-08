const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const checkRole = require("../../middlewares");

const { globalErrorHandler } = require("../../utils");

const TemplateModel = require("../../models/Template.model");

router.get("/list", async (req, res) => {
  try {
    const templates = await TemplateModel.find();

    return res.json({ templates });
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
