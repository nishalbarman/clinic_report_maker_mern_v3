const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: Number, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Auth", authSchema);
