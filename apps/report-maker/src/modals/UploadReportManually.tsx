function UploadReportManually() {
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
              <form action="" method="post" id="manual-report-upload">
                <div className="mb-3 d-flex flex-row gap-2">
                  <label className="pure-material-textfield-outlined">
                    <input
                      type="number"
                      className="form-control"
                      aria-label="Serial"
                      aria-describedby="inputGroup-sizing-lg"
                      placeholder="Serial No"
                      name="serial_no"
                      value={""}
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
                      value={""}
                      manual-upload-fields=""
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
                      value={""}
                      manual-upload-fields=""
                    />
                  </label>
                  <div className="d-flex flex-row">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01">
                      {"->"}
                    </label>
                    <select
                      name="age_back"
                      className="form-select"
                      id="inputGroupSelect01"
                      manual-upload-fields="">
                      <option value={""} selected={true}>
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
                    manual-upload-fields="">
                    <option value={""} selected={true}>
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
                    manual-upload-fields=""
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control disabled"
                    placeholder=""
                    aria-label="Phone Number"
                    aria-describedby="basic-addon1"
                    name="technician"
                    value={"<?php echo $_SESSION['name']; ?>"}
                    readOnly
                    disabled={true}
                    manual-upload-fields=""
                  />
                </div>
              </form>
            </div>
          </div>

          <div
            className="modal-footer"
            style={{ display: "flex", justifyContent: "center", padding: 20 }}>
            <button
              id="manual-upload-btn"
              type="submit"
              style={{ width: "70%" }}
              className="btn btn-outline-success btn-lg"
              manual-upload-button="">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadReportManually;
