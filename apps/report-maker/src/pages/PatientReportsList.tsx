import { useEffect, useState } from "react";
import { useAppSelector } from "../redux";
import axios from "axios";
import { handleGlobalError } from "../utils";
import { ROLE } from "../roleEnumes";

type Report = {
  _id?: string;
  sample_no: string;
  technician: { name: string };
  patient_name: string;
  patient_age: string;
  gender: string;
  size: number;
  downloads: number;
  report_pdf: string;
  createdAt?: string;
};

function ReportsList() {
  const token = useAppSelector((state) => state.auth.token);
  const role = useAppSelector((state) => state.auth.role);

  const [patientReportList, setPatientReportList] = useState<Report[]>([]);

  console.log(patientReportList);

  const [paginationPage, setPaginationPage] = useState<number>(0);
  const [paginationLimit, setPaginationLimit] = useState<number>(30);

  const fetchPatientReportDetails = async () => {
    try {
      const url = new URL(
        "/patient-report/list",
        import.meta.env.VITE_SERVER_API
      );
      url.searchParams.append("page", String(paginationPage));
      url.searchParams.append("limit", String(paginationLimit));

      const response = await axios.get(url.href, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPatientReportList(response.data?.reports || []);
    } catch (error) {
      handleGlobalError(error);
    }
  };

  useEffect(() => {
    fetchPatientReportDetails();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Patient Reports</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              {role === ROLE.ADMIN && (
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
                {role === ROLE.ADMIN && (
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
              {patientReportList.map((report, index) => (
                <tr key={report._id}>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {index + 1}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {report.patient_name}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {report.patient_age}
                  </td>
                  {role === ROLE.ADMIN && (
                    <td
                      style={{ textAlign: "center", verticalAlign: "middle" }}>
                      {report.technician.name}
                    </td>
                  )}
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {report.downloads} Times
                  </td>
                  <td style={{ textAlign: "left", verticalAlign: "middle" }}>
                    {report.createdAt}
                  </td>
                  <td
                    className="hide-part"
                    style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <div className="btn-group">
                      {/* <button
                        type="button"
                        className="btn btn-sm"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <span className="material-symbols-outlined">
                          drive_file_rename_outline
                        </span>
                      </button> */}
                      <button
                        // onClick={() => {
                        //   handleReportDelete(report._id);
                        // }}
                        type="button"
                        className="btn btn-sm"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                      <button
                        onClick={() => window.open(report.report_pdf, "_blank")}
                        type="button"
                        className="btn btn-sm"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                      {/* <ul className="dropdown-menu"> */}
                      {/* <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            download
                            href={report.report_pdf}>
                            Download
                          </a>
                        </li> */}

                      {/* <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li></li> */}
                      {/* </ul> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot />
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReportsList;
