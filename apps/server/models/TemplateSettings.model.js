const mongoose = require("mongoose");

const templateBaseSettingSchema = new mongoose.Schema(
  {
    footerHTML: { type: String, required: "true" },
    headerHTML: { type: String, required: "true" },
    patientDetailsHTML: { type: String, required: "true" },
  },
  {
    timestamps: true,
  }
);

const TemplateBaseSettingModel = mongoose.model(
  "template_base_setting",
  templateBaseSettingSchema
);

module.exports = TemplateBaseSettingModel;
