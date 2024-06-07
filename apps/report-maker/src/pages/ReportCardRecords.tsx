function CardRecordList() {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Report Card Records</h1>
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
              <tr id={"rp_dtl.id"} key={"rp_dtl.id"}>
                <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                  {"1"}
                </td>
                <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                  <input
                    type="text"
                    // onChange={(e) => cardUpdate(e, "cardname", rp_dtl.id)}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      textAlign: "center",
                      width: "170px",
                    }}
                    value={"CBC"}
                  />
                </td>
                <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                  <input
                    type="text"
                    // onChange={(e) => cardUpdate(e, "price", rp_dtl.id)}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      textAlign: "center",
                      width: "100px",
                    }}
                    value={"0"}
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
                    // value={"#daf"}
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
                    // value={"#daf"}
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
                    value={"Use This"}
                  />
                </td>
                <td
                  style={{
                    textAlign: "center",
                    width: "10%",
                    verticalAlign: "middle",
                  }}>
                  {0 === 0 ? "False" : "True"}
                </td>
                <td style={{ textAlign: "left", verticalAlign: "middle" }}>
                  {"Complete Blood Count Report, TLC"}
                </td>
                <td style={{ textAlign: "center", verticalAlign: "middle" }}>
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
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteConfirm"
                          //   onClick={() => queryRun(rp_dtl.id, true, "cards")}
                        >
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CardRecordList;
