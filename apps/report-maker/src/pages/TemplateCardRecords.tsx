import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { handleGlobalError } from "../utils/index.js";

type Template = {
  _id?: string;
  cardName: string;
  price: number;
  url: string;
  color_f: string;
  color_s: string;
  btn_name: string;
  keywords: string;
  new: boolean;
};

function CardRecordList() {
  const [templateList, setTemplateList] = useState<Template[]>([]);

  const [paginationPage, setPaginationPage] = useState<number>(0);
  const [paginationLimit, setPaginationLimit] = useState<number>(30);

  const fetchTemplateList = async () => {
    try {
      const url = new URL("/templates/list", import.meta.env.VITE_SERVER_API);
      url.searchParams.append("page", String(paginationPage));
      url.searchParams.append("limit", String(paginationLimit));

      const response = await axios.get(url.href);

      setTemplateList(response.data?.templates || []);
    } catch (error) {
      handleGlobalError(error);
    }
  };

  useEffect(() => {
    fetchTemplateList();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Template Card Records</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
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
                  PRICE
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  TOP COLOR
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  BOTTOM COLOR
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  BUTTON NAME
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  NEW CARD
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  KEYWORDS
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {templateList?.length > 0 &&
                templateList.map((template, index) => {
                  return (
                    <tr key={template._id}>
                      <td
                        style={{
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}>
                        {index + 1}
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}>
                        <input
                          type="text"
                          // onChange={(e) => cardUpdate(e, "cardname", rp_dtl.id)}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            textAlign: "center",
                            width: "170px",
                          }}
                          value={template.cardName}
                        />
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}>
                        <input
                          type="text"
                          // onChange={(e) => cardUpdate(e, "price", rp_dtl.id)}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            textAlign: "center",
                            width: "100px",
                          }}
                          value={template.price}
                        />
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          width: "12%",
                          verticalAlign: "middle",
                        }}>
                        <input
                          type="color"
                          // onChange={(e) => cardUpdate(e, "color_f", rp_dtl.id)}
                          value={template.color_f}
                        />
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          width: "15%",
                          verticalAlign: "middle",
                        }}>
                        <input
                          type="color"
                          // onChange={(e) => cardUpdate(e, "color_f", rp_dtl.id)}
                          value={template.color_s}
                        />
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          width: "15%",
                          verticalAlign: "middle",
                        }}>
                        <input
                          type="text"
                          // onChange={(e) => cardUpdate(e, "btn_name", rp_dtl.id)}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            textAlign: "center",
                            width: "100px",
                          }}
                          value={template.btn_name}
                        />
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          width: "10%",
                          verticalAlign: "middle",
                        }}>
                        {template.new ? "True" : "False"}
                      </td>
                      <td
                        style={{ textAlign: "left", verticalAlign: "middle" }}>
                        {template.keywords}
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}>
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
                              <button
                                className="dropdown-item d-flex align-items-center gap-1"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteConfirm"
                                //   onClick={() => queryRun(rp_dtl.id, true, "cards")}
                              >
                                <span
                                  style={{
                                    color: "darkskyblue",
                                  }}
                                  className="material-symbols-outlined">
                                  delete
                                </span>
                                <span
                                  style={{
                                    fontWeight: "bold",
                                  }}>
                                  Delete
                                </span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CardRecordList;
