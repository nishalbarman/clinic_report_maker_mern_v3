import React from "react";
import "../css/card_styles.css";
import ReportCard from "../components/ReportCard";

interface ReportDetail {
  id: number;
  patient_name: string;
  patient_age: number;
  created_by: string;
  downloads: number;
  creation_date: string | null;
  file_name: string;
}

interface Props {
  role?: number;
}

const ReportList: React.FC<Props> = ({ role = -1 }) => {
  const data: ReportDetail[] = [
    {
      id: 1,
      patient_name: "John Doe",
      patient_age: 30,
      created_by: "Nishal",
      downloads: 0,
      creation_date: "dafdfad",
      file_name: "filename",
    },
  ]; // Assuming you fetch the data from somewhere

  return (
    <div className="container lets-do">
      <div className="row">
        <div>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Top Used Templates</h1>

            <div className="btn-toolbar mb-md-0">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <span
                  className="material-symbols-outlined"
                  style={{ verticalAlign: "middle" }}>
                  add_circle
                </span>
              </button>
            </div>
            {/*?php } ?*/}
          </div>
          {/* Template Starts Here */}
          <section className="card-area" menu-cards="">
            <ReportCard title="CBC" price={25} onClick={() => {}} />
            <ReportCard title="Sugar" price={25} onClick={() => {}} />
            <ReportCard title="Blood" price={25} onClick={() => {}} />
            <ReportCard title="CBC" price={25} onClick={() => {}} />
            <ReportCard title="CBC" price={25} onClick={() => {}} />

            {/* <span className="text-center text-[20px] font-bold " id="no-data">
                No Data Found
              </span> */}
          </section>
        </div>

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mt-2 pb-2 mb-3 border-bottom">
          <h1 className="h2">Patient Reports</h1>
          {role === 1 && (
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
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
                <button
                  id="print-btn"
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  style={{ verticalAlign: "center" }}>
                  Export PDF
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="table-responsive" data-table>
          <table id="tbl-repo" className="table table-striped table-sm">
            <caption className="text-center">&copy; HealthKind LAB</caption>
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
                  <th
                    className="mobile-view"
                    style={{ textAlign: "center" }}
                    scope="col">
                    TECHNICIAN
                  </th>
                )}
                <th
                  className="mobile-view"
                  style={{ textAlign: "center" }}
                  scope="col">
                  DOWNLOADS
                </th>
                <th
                  className="mobile-view"
                  style={{ textAlign: "center" }}
                  scope="col">
                  CREATED
                </th>
                <th
                  style={{ textAlign: "center" }}
                  scope="col"
                  className="hide-part">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((reportPatiantDetails) => (
                <tr key={reportPatiantDetails.id}>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {reportPatiantDetails.id}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {reportPatiantDetails.patient_name}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {reportPatiantDetails.patient_age}
                  </td>
                  {role === 1 && (
                    <td
                      className="mobile-view"
                      style={{
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}>
                      {reportPatiantDetails.created_by}
                    </td>
                  )}
                  <td
                    className="mobile-view"
                    style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {reportPatiantDetails.downloads} Times
                  </td>
                  <td
                    className="mobile-view"
                    style={{ textAlign: "left", verticalAlign: "middle" }}>
                    {reportPatiantDetails.creation_date
                      ? reportPatiantDetails.creation_date
                      : "00/00/0000 00:00:00 N/A"}
                  </td>
                  <td
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                    className="hide-part">
                    {/* Example single danger button */}
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <span className="material-symbols-outlined">
                          drive_file_rename_outline
                        </span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button className="dropdown-item d-flex align-items-center justify-content-start flex-row gap-2">
                            <span className="material-symbols-outlined">
                              download
                            </span>
                            <span>Download</span>
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item d-flex align-items-center justify-content-start flex-row gap-2">
                            <span className="material-symbols-outlined">
                              delete
                            </span>
                            <span> Delete</span>
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item d-flex align-items-center flex-row ">
                            <span className="material-symbols-outlined">
                              upload_file
                            </span>
                            <span>Replace with Local</span>
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button className="dropdown-item d-flex align-items-center justify-content-start flex-row gap-2">
                            <span className="material-symbols-outlined">
                              visibility
                            </span>
                            <span>Preview</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="hide-part">
                <td colSpan={7} className="text-center">
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href={`report-list.php?id=${data[data.length - 1]?.id}&lid=${data[data.length - 1]?.id}`}>
                    View More
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportList;
