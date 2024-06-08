const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateSchema = new Schema(
  {
    cardName: { type: String, required: true },
    price: { type: Number, required: true },
    url: { type: String, required: true },
    color_f: { type: String, required: true },
    color_s: { type: String, required: true },
    btn_name: { type: String, required: true },
    keywords: { type: String, required: true },
    new: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const TemplateModel = mongoose.model("report_template_cards", templateSchema);

module.exports = TemplateModel;
