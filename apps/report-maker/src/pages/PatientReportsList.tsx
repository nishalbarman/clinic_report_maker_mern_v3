function ReportsList() {
  const role = parseInt((localStorage.getItem("role") as string) || "1");

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Patient Reports</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              {role === 1 && (
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#upload-report-manually">
                  <span
                    className="material-symbols-outlined"
                    style={{ verticalAlign: "middle" }}>
                    add_circle
                  </span>
                </button>
              )}
              <button
                id="print-btn"
                type="button"
                className="btn btn-sm btn-outline-secondary">
                Export PDF
              </button>
            </div>
          </div>
        </div>
        <div className="table-responsive" id="table" data-table="">
          {/* Query and loop through data here */}
          <table className="table table-striped table-sm">
            <caption className="text-center">© HealthKind LAB</caption>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }} scope="col">
                  #
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  NAME
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  AGE
                </th>
                {role === 1 && (
                  <th style={{ textAlign: "center" }} scope="col">
                    TECHNICIAN
                  </th>
                )}
                <th style={{ textAlign: "center" }} scope="col">
                  DOWNLOADS
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  CREATED
                </th>
                <th
                  className="hide-part"
                  style={{ textAlign: "center" }}
                  scope="col">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Render each report */}
              {/* Example: */}
              {/* {reports.map((report) => (
              <tr key={report.id}>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{report.id}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{report.name}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{report.age}</td>
                {role === 1 && (
                  <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{report.technician}</td>
                )}
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{report.downloads} Times</td>
                <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>{report.created}</td>
                <td className="hide-part" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <div className="btn-group">
                    <button type="button" className="btn  btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="material-symbols-outlined">drive_file_rename_outline</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href={`reports.php?serial=${report.id}`}>
                        <img style={{ width: 27, height: 27, marginRight: 5 }} src="../assets/table_dropdowns/download.png" />
                        Download
                      </a></li>
                      <li><a className="dropdown-item" href={`delete.php?serial=${report.id}&file=${report.file_name}`}>
                        <img style={{ width: 25, height: 25, marginRight: 5 }} src="../assets/table_dropdowns/remove.png" />
                        Delete
                      </a></li>
                      <li><a className="dropdown-item" href={`changeFile.php?file=${report.file_name}`}>
                        <img style={{ width: 24, height: 24, marginRight: 5 }} src="../assets/table_dropdowns/update.png" />
                        Replace with Local
                      </a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href={`preview.php?file=${btoa(report.file_name)}`}>Preview</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))} */}
            </tbody>
            <tfoot />
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReportsList;
