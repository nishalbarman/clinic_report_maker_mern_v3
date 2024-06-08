import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useAppSelector } from "../redux";
import { handleGlobalError } from "../utils";
import { toast } from "react-toastify";

type PatientReportDetails = {
  sample_no: string;
  patient_name: string;
  age: string;
  age_type: string;
  gender: string;
  report_pdf: string;
};

function UploadReportManually() {
  const { token } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState<PatientReportDetails>({
    sample_no: "",
    patient_name: "",
    age: "",
    age_type: "",
    gender: "",
    report_pdf: "",
  });

  console.log(formData);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "report_pdf" && files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          [name]: (reader.result as string)?.split(",")[1], // Get the base64 string without the metadata
        });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSelectChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = toast.loading("Uploading report, please wait...");
    try {
      const url = new URL(
        "/patient-report/upload",
        import.meta.env.VITE_SERVER_API
      );
      const response = await axios.post(url.href, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.update(id, {
        type: "success",
        autoClose: 3000,
        isLoading: false,
        render: "Report uploaded.",
      });
      // Handle success, maybe reset the form or give a success message
    } catch (error) {
      handleGlobalError(error);
      toast.update(id, {
        type: "error",
        autoClose: 3000,
        isLoading: false,
        render: "Report uploaded failed.",
      });
    }
  };

  return (
    <div
      className="modal fade"
      id="upload-report-manually"
      tabIndex={-1}
      aria-labelledby="Mannual Upload"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="manualadd">
              Upload Report Manually
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div style={{ padding: "15px 20px 0px 20px" }}>
              <form onSubmit={handleSubmit} id="manual-report-upload">
                <div className="mb-3 d-flex flex-row gap-2">
                  <label className="pure-material-textfield-outlined">
                    <input
                      type="number"
                      className="form-control"
                      aria-label="Sample"
                      aria-describedby="inputGroup-sizing-lg"
                      placeholder="Sample No"
                      name="sample_no"
                      value={formData.sample_no}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="pure-material-textfield-outlined">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Name"
                      aria-describedby="inputGroup-sizing-lg"
                      placeholder="Name"
                      name="patient_name"
                      value={formData.patient_name}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="input-group mb-3 d-flex flex-row gap-2">
                  <label className="pure-material-textfield-outlined">
                    <input
                      type="number"
                      className="form-control"
                      aria-label="Age"
                      aria-describedby="inputGroup-sizing-lg"
                      placeholder="Age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </label>
                  <div className="d-flex flex-row">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01">
                      {"->"}
                    </label>
                    <select
                      name="age_type"
                      className="form-select"
                      id="inputGroupSelect01"
                      value={formData.age_type}
                      onChange={handleSelectChange}>
                      <option value="" selected={true}>
                        Choose...
                      </option>
                      <option value="Years">Years</option>
                      <option value="Months">Months</option>
                    </select>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01">
                    Gender
                  </label>
                  <select
                    name="gender"
                    className="form-select"
                    id="inputGroupSelect01"
                    value={formData.gender}
                    onChange={handleSelectChange}>
                    <option value="" selected={true}>
                      Choose...
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Select Report
                  </label>
                  <input
                    name="report_pdf"
                    className="form-control"
                    type="file"
                    id="formFile"
                    accept="application/pdf"
                    onChange={handleChange}
                  />
                </div>

                {/* <div className="mb-3">
                  <input
                    type="text"
                    className="form-control disabled"
                    placeholder=""
                    aria-label="Phone Number"
                    aria-describedby="basic-addon1"
                    name="technician"
                    value={formData.technician}
                    readOnly
                    disabled={true}
                  />
                </div> */}
                <div
                  className="modal-footer"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: 20,
                  }}>
                  <button
                    id="manual-upload-btn"
                    type="submit"
                    style={{ width: "70%" }}
                    className="btn btn-outline-success btn-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadReportManually;
