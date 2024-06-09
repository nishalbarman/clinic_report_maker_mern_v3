const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");
const TemplateBaseSettinModel = require("./models/TemplateSettings.model");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// ANSI escape codes for text color
const red = "\x1b[31m";
const green = "\x1b[32m";
const reset = "\x1b[0m";

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(green, "MongoDB connected", reset))
  .catch((err) => {
    console.log(red, err, reset);
    process.exit(1);
  });

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// TemplateBaseSettinModel.create({
//   footerHTML:
//     "<div class='footer'> <table style='width: 90%; border-collapse: collapse; border: none; margin-left: 50px; margin-right:30px;'> <tbody> <tr> </tr> </tbody> </table> <div style='width: 90%; display: flex; justify-content: space-between; padding: 0px 20px;'> <div style='display: flex; flex-direction: column; justify-content: center; align-items: center;'> <img src='' width='200' height='100'> <br> <strong>SIGNATURE OF PATHOLOGIST</strong> <span style='color:#262626;'>Dr. R. Kalita</span> </div> <div style='display: flex; flex-direction: column; justify-content: center; align-items: center;'> <img src='' width='200' height='100'> <br> <strong>SIGNATURE OF PATHOLOGIST</strong> <span style='color:#262626;'>Dr. R. Kalita</span> </div> </div> <br> <hr style='background-color:#000000; height:0.5px; width:100%;' /><br> <p style='text-align:center;font-size:9pt;'><span style='text-align:center;font-size:9pt;font-family:Arial;color:#454545'>Please correlate clinically, It is not for medico-legal purpose.</span></p> <br> </div>",
//   headerHTML:
//     "<table style='width:929px'> <tbody> <tr> <td style='width:665px'><img alt='' src='https://firebasestorage.googleapis.com/v0/b/renting-app-86d7d.appspot.com/o/%2F%2Fhealth_logo_copy.png?alt=media&token=08b60dcf-8ff9-42d0-9e7d-d8b71d913133' style='height:225px; width:680px; margin-left:21px'></td> <td style='width:500px'> <p style='text-align:right;margin-right:55px'><img alt='' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAABlBMVEX///8AAABVwtN+AAACZklEQVR4nO3SwW7DMAwD0Ob/f3q3QiMpum5sZxioQ5ElMvU0+PVKpVKpVCqVSqVSS+tSVb/W3/pVtnX9fkqAu4HyDc8fEroeMyXAY8Bu1DAS7hTnDBcK8Cmgj+H3FxXkB/jXgAyByYDiNHgI8FmgJEMD0+Q2ENhxAjwJ5ILgJb9ySoAHgEP7e8j7pRzIp2r/ngpwQgG3Tw6RNNjjfcocn1QHeBcIUh8PO/FBODJcOsBjwE/uVH0vE8yWUh3gGeBVqqbCGykFkSTzrG7FADcBa9jQAtnwzIsCf94V4DJgHeLJ3MY3q7bVrzfuYIDfA6/fxXO4s74xK0LPvf9agAuAHANk2QbLcfhXqADXAyXWeGVPPd55u1UC3ArspIbcNTPT5wR4BugncLOP7w6arwFuBcJkyINU6IEyXh8V4FYg3w64gzKMLyOf6vJZHeBuIFvM/JoNbRIF2AAfARpplwpSv8o8KsCVQBhi5sA0KDjFzSuMAX4PlK46jbPhSHd2ETbA74GQUU93Upj8ST6jAjwM5BiG8xzohxWhTf5LAjwGrAoZAz3QDMzOxcsFeAZo5hsC9HQH50UBrgd2efzcjeUQ2PsGNsAFQMbWaRJiXDJBegM8CawzX3RZ4E94kAvB0vVh0hjgGuBw2vASydt3NTVjDPAu0MCv33cHfmGa74fMAE8CL1XMgdTuoRIMdubfF+ACYPfG3Ca5WX0pTwX4IFAGc15nB7Lfg3sCfBzYze8G+gT5KcBHgJDaHZQEaJB7BHgS2JEloVoM0LyckQa4AMgF79kFbzryJ9gAdwNTqVQqlUqlUqnU/6kfLhUclmxjQFkAAAAASUVORK5CYII=' style='height:100px; width:100px'></p> <p style='text-align:center'><span style='color:#1F3864;font-family: Bahnschrift; font-weight: bold;'><strong>&nbsp; &nbsp;Serial : 23423423 </strong></span></p> </td> </tr> </tbody> </table>",
//   patientDetailsHTML:
//     "<center> <table class='PatientTable' style='border-collapse:collapse; border:none'> <tbody> <tr> <td style='width: 50%; height:19px' valign='top'> <p>Name of the patient : <strong>$PATIENT_NAME</strong></p> </td> <td style='height:19px' valign='top'> <p>Billing Date: <strong>$REPORT_DATE</strong></p> </td> </tr> <tr> <td style='height:18px' valign='top'> <p>Age : <strong>$PATIENT_AGE</strong>, Gender : <strong>$PATIENT_GENDER</strong> </p> </td> <td style='height:18px' valign='top'> <p>Sample (Lab No.): <strong>$PATIENT_SAMPLE</strong></p> </td> </tr> <tr> <td style='height:19px' valign='top'> <p>Referred by Dr. : <strong>$DR_NAME</strong></p> </td> <td style='height:19px' valign='top'> <p>Date of collection: <strong>$REPORT_DATE</strong></p> </td> </tr> <tr> <td style='height:19px' valign='top'> <p>Sample Type : <strong>$SAMPLE_TYPE</strong></p> </td> <td style='height:19px' valign='top'> <p>Date of report: <strong>$REPORT_DATE</strong></p> </td> </tr> </tbody> </table> </center>",
// });

// Use authentication routes
app.use("/auth/login", require("./routes/auth/login.routes"));
app.use("/auth/register", require("./routes/auth/register.routes"));

app.use("/templates", require("./routes/templates/templates.routes"));
app.use("/users", require("./routes/users/users.routes"));
app.use(
  "/patient-report",
  require("./routes/patient-report/patient-report.routes")
);
app.use("/pdf", require("./routes/pdf/pdf.routes"));

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
