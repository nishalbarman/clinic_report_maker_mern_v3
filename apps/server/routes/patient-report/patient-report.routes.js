const express = require("express");
const ReportModel = require("../../models/PatientReport.model");
const { FirebaseUtils } = require("firebase-utils");
const checkRole = require("../../middlewares");

const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const reports = await ReportModel.find().populate(["technician"]); // Retrieve all reports from the database
    res.status(200).json({ reports }); // Send the reports as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve reports" });
  }
});

// Handle report upload
router.post("/upload", checkRole(0, 1), async (req, res) => {
  try {
    const { sample_no, patient_name, age, age_type, gender, report_pdf } =
      req.body;

    const pdfBuffer = Buffer.from(report_pdf, "base64");

    const pdfPublicUrl = await FirebaseUtils.uploadBuffer({
      path: "/report-maker/reports",
      buffer: pdfBuffer,
      type: "application/pdf",
    });

    const newReport = await ReportModel.create({
      sample_no: sample_no,
      patient_name: patient_name,
      patient_age: age + " " + age_type,
      gender: gender,
      size: pdfBuffer.length,
      downloads: 0,
      report_pdf: pdfPublicUrl,
      technician: req.user._id,
    });

    res.status(200).json({ message: "Report uploaded successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to upload report" });
  }
});

module.exports = router;
