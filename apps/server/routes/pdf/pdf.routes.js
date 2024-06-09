const express = require("express");
const html_to_pdf = require("html-pdf-node");
const router = express.Router();

const checkRole = require("../../middlewares");

const { globalErrorHandler } = require("../../utils");

const TemplateModel = require("../../models/Template.model");
const { FirebaseUtils } = require("firebase-utils");
const TemplateBaseSettingModel = require("../../models/TemplateSettings.model");

router.get("/html-to-pdf", async (req, res) => {
  try {
    const templateBaseSetting = (await TemplateBaseSettingModel.find())[0];

    console.log(templateBaseSetting);

    const htmlContent =
      `<head> <style> * { font-weight: SemiBold; font-style: normal; } html { position: relative; min-height: 100%; } html, body { margin: 0; margin-left: 6px; margin-right: 6px; margin-top: 17px; padding: 0; padding-left: 2px; } .pageContentWrapper { margin-bottom: 100px; } .footer { position: absolute; bottom: 0; padding-bottom: 12px; background: white; width: 100%; } .qr-btn { radius: 3px; background-color: #04AA6D; padding: 8px; color: white; cursor: pointer; } .PatientTable { font-family: Bahnschrift; font-size: 13.0pt; margin-left: auto; margin-right: auto; width: 95%; padding-top: 10px; /* padding-left: */ letter-spacing: 1.1px; } .ReportTable { font-family: Bahnschrift; font-size: 14.0pt; margin-left: auto; margin-right: auto; margin-top: 5px; width: 95%; text-align: center; } .ReportTable > figure, .ReportTable > figure > table { width: 100%; } </style> <meta name="viewport" content="width=device-width, initial-scale=1.0"> </head>` +
      templateBaseSetting.headerHTML +
      `<DIV STYLE="background-color:black; border: 1px solid black; height:1px; width:100%;"></div>` +
      `<div class='PatientTable'>${templateBaseSetting.patientDetailsHTML}</div>` +
      `<center><div class='ReportTable'>${`<p>
    &nbsp;
</p>
<figure class="table" style="float:right;width:100%;">
    <table class="ck-table-resized">
        <colgroup><col style="width:49.96%;"><col style="width:50.04%;"></colgroup>
        <tbody>
            <tr>
                <td>
                    <img class="image_resized" style="aspect-ratio:367/64;width:84.72%;" src="data:image/png;base64,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" width="367" height="64"><br>
                    Vill./P.O. - Nalbari, Nalbari to kaithalkuchi Road, Assam<br>
                    <a href="mailto:healthkindlab@gmail.com">healthkindlab@gmail.com</a><br>
                    6001029239
                </td>
                <td style="text-align:right;">
                    <p>
                        <img src="data:image/jpeg;base64,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" width="92" height="92">
                    </p>
                    <p>
                        Serial No: 432423
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</figure>
<p style="text-align:justify;">
    <strong>Details:</strong>
</p>
<figure class="table" style="width:100%;">
    <table style="border-color:hsl(0, 0%, 0%);border-style:solid;">
        <tbody>
            <tr>
                <td style="vertical-align:top;">
                    Patient Name: <strong>Abhijit Kumar</strong><br>
                    Age: <strong>19 Years</strong>, Gender: <strong>Male</strong><br>
                    Referred By Dr.: <strong>Abhishekh Kumar</strong><br>
                    Sample Type: <strong>Serum</strong>
                </td>
                <td style="vertical-align:top;">
                    Billing Date: <strong>12/01/2019</strong><br>
                    Sample (Lab No.): <strong>23423</strong><br>
                    Date of collection: <strong>12/01/2019</strong><br>
                    Date of report: <strong>13/01/2019</strong>
                </td>
            </tr>
        </tbody>
    </table>
</figure>
<p>
    Report Type: <strong>Complete Blood Count Report</strong>
</p>
<p>
    <strong><u>Status</u></strong>
</p>
<figure class="table" style="width:100%;">
    <table>
        <thead>
            <tr>
                <th>
                    Test
                </th>
                <th>
                    Result
                </th>
                <th>
                    Unit
                </th>
                <th>
                    Ref.
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <strong>TLC :&nbsp;</strong>
                </td>
                <td>
                    &nbsp;
                </td>
                <td>
                    /CUMM
                </td>
                <td>
                    4000-1000
                </td>
            </tr>
            <tr>
                <td>
                    <figure class="table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>DLC:</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        &nbsp; &nbsp; Neutrophil:
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        &nbsp; &nbsp; Lymphocycle:
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        &nbsp; &nbsp; Monocyte:
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        &nbsp; &nbsp; Eosinophil:
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        &nbsp; &nbsp; Basophil:
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </figure>
                </td>
                <td>
                    <figure class="table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </figure>
                </td>
                <td>
                    <figure class="table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        %
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        %
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        %
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        %
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        %
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </figure>
                </td>
                <td>
                    <figure class="table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        40-70
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        20-40
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        02-10
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        01-06
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </figure>
                </td>
            </tr>
        </tbody>
    </table>
</figure>
<p style="text-align:center;">
    <br>
    <br>
    &nbsp;
</p>`}<p style="text-align: center; width: 100%">** End of Report **</p></div></center>` +
      `<center>${templateBaseSetting.footerHTML}</center>`;

    const options = {
      format: "A4",
      displayHeaderFooter: true,
    };

    const file = {
      content: htmlContent,
    };

    html_to_pdf
      .generatePdf(file, options)
      .then(async (pdfBuffer) => {
        console.log("PDF Buffer:-", pdfBuffer);

        const pdfString = await FirebaseUtils.uploadBuffer({
          path: "/test/pdf",
          buffer: pdfBuffer,
          type: "application/pdf",
        });

        return res.json({ pdfString });
      })
      .catch((err) => {
        return globalErrorHandler({ res, error: err });
      });
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
