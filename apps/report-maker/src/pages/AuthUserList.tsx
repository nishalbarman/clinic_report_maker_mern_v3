import { useCallback, useEffect, useState } from "react";
import DeleteConfirmModal from "../modals/DeleteConfirmModal";
import axios from "axios";
import { handleGlobalError } from "../utils";
import { ROLE } from "../roleEnumes";
import { useAppSelector } from "../redux";

type User = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: number;
  image: string;
};

function AuthUserList() {
  const token = useAppSelector((state) => state.auth.token);

  const [usersList, setUsersList] = useState<User[]>([]);

  const [paginationPage, setPaginationPage] = useState<number>(0);
  const [paginationLimit, setPaginationLimit] = useState<number>(30);

  const fetchUserList = async () => {
    try {
      const url = new URL("/users/list", import.meta.env.VITE_SERVER_API);
      url.searchParams.append("page", String(paginationPage));
      url.searchParams.append("limit", String(paginationLimit));

      const response = await axios.get(url.href, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsersList(response.data?.users || []);
    } catch (error) {
      handleGlobalError(error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);

  const handleDeleteUserRecord = useCallback(() => {
    try {
      const response = axios.delete(
        `${process.env.VITE_SERVER_API}/user-auth-record/${deleteUserId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
                {usersList.map((item, index) => (
                  <tr>
                    <td
                      style={{ textAlign: "center", verticalAlign: "middle" }}>
                      {index + 1}
                    </td>
                    <td
                      style={{ textAlign: "center", verticalAlign: "middle" }}>
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
                        value={item.name}
                      />
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        width: "16%",
                        verticalAlign: "middle",
                      }}>
                      {item.email}
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
                        value={item.phone}
                      />
                    </td>
                    <td
                      style={{ textAlign: "center", verticalAlign: "middle" }}>
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
                        value={
                          item.role === ROLE.ADMIN
                            ? "Admin"
                            : item.role === ROLE.TECHNICIAN
                              ? "Technician"
                              : "User"
                        }
                      />
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        width: "18%",
                        verticalAlign: "middle",
                      }}>
                      <img
                        src={item.image}
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
                    <td
                      style={{ textAlign: "center", verticalAlign: "middle" }}>
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
                ))}
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
