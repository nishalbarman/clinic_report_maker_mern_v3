import { useCallback, useState } from "react";
import DeleteConfirmModal from "../modals/DeleteConfirmModal";
import axios from "axios";
import { handleGlobalError } from "../utils";

function AuthUserList() {
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);

  const handleDeleteUserRecord = useCallback(() => {
    try {
      const response = axios.delete(
        `${process.env.VITE_SERVER_API}/user-auth-record/${deleteUserId}`
      );
    } catch (error) {
      handleGlobalError(error);
    }
  }, [deleteUserId]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Registered User Record</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                data-bs-toggle="modal"
                data-bs-target="#regModal">
                <span
                  className="material-symbols-outlined"
                  style={{ verticalAlign: "middle" }}>
                  add_circle
                </span>
              </button>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
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
                    EMAIL
                  </th>
                  <th style={{ textAlign: "center" }} scope="col">
                    PHONE
                  </th>
                  <th style={{ textAlign: "center" }} scope="col">
                    ROLE
                  </th>
                  <th style={{ textAlign: "center" }} scope="col">
                    IMAGE
                  </th>
                  <th style={{ textAlign: "center" }} scope="col">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {"SL. 1"}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <input
                      type="text"
                      // onChange={(e) => cardUpdate(e.target, "name", rp_dtl.id)}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        textAlign: "center",
                        width: "170px",
                      }}
                      value={"test value"}
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      width: "16%",
                      verticalAlign: "middle",
                    }}>
                    {"test_value@gmail.com"}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      width: "12%",
                      verticalAlign: "middle",
                    }}>
                    <input
                      type="number"
                      // onChange={(e) => cardUpdate(e.target, "phone", rp_dtl.id)}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        textAlign: "center",
                      }}
                      value={"945554854"}
                    />
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <input
                      type="text"
                      // onChange={(e) => cardUpdate(e.target, "role", rp_dtl.id)}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        textAlign: "center",
                        width: "100px",
                      }}
                      value={"User"}
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      width: "18%",
                      verticalAlign: "middle",
                    }}>
                    <img
                      // src={`../uploads/profile_pic/${rp_dtl.image}`}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        width: "50px",
                        height: "50px",
                      }}
                      alt="profile-pic"
                    />
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <div className="btn-group">
                      <button
                        onClick={() => {
                          setDeleteUserId("random-mongodb-id");
                        }}
                        type="button"
                        className="btn btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteConfirm">
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                      {/* <ul className="dropdown-menu">
                      <li>
                        <button
                          className="dropdown-item d-flex flex-row align-items-center gap-1"
                          //   onClick={() => queryRun(rp_dtl.id, true, "auth")}
                          data-bs-toggle="modal"
                          data-bs-target="#deleteConfirm">
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                          <span>Delete</span>
                        </button>
                      </li>
                    </ul> */}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DeleteConfirmModal onClick={handleDeleteUserRecord} />
    </>
  );
}

export default AuthUserList;
