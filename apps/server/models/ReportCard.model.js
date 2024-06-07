const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardsSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  cardname: { type: String, required: true },
  price: { type: Number, required: true },
  url: { type: String, required: true },
  color_f: { type: String, required: true },
  color_s: { type: String, required: true },
  btn_name: { type: String, required: true },
  keywords: { type: String, required: true },
  new: { type: Boolean, required: true },
});

module.exports = mongoose.model("Cards", cardsSchema);
