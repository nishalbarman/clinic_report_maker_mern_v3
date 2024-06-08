const mongoose = require("mongoose");

const patientReportSchema = new mongoose.Schema(
  {
    technician: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "user",
    },
    patient_name: String,
    patient_age: String,
    gender: String,
    file_name: String,
    size: Number,
    downloads: Number,
    report_pdf: String,
  },
  {
    timestamps: true,
  }
);

const ReportModel = mongoose.model("patient_reports", patientReportSchema);

module.exports = ReportModel;
