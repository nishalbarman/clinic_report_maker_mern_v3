import React, { useEffect, useState } from "react";
// import "../css/headers.css";
// import "../css/insert_card.css";

import headerLogo from "../assets/logo/hk.png";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux";
import axios from "axios";

const Header: React.FC = () => {
  const pic = useAppSelector((state) => state.auth.pic);

  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            <img
              className="bi me-2"
              width="45"
              height="45"
              role="img"
              alt="Header Logo"
              aria-label="Report Maker"
              src={headerLogo}
            />
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 gap-3 px-3">
            <li>
              <Link to={`/dashboard`} className="nav-link px-2 link-dark">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to={`/templates`} className="nav-link px-2 link-dark">
                Templates
              </Link>
            </li>

            <li>
              <Link
                to={`/generate-new-template`}
                className="nav-link px-2 link-dark">
                Generate-New-Template
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "red" }}>
                Others
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={`/patient-report-list`}>
                    Report List
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to={`/report-card-list`}>
                    Card List (DB)
                  </Link>
                </li>

                <li>
                  <Link to={`/user-list`} className="dropdown-item ">
                    User List (DB)
                  </Link>
                </li>

                {/* <li>
                  <Link to={`/card-views-record`} className="dropdown-item">
                    Views List (DB)
                  </Link>
                </li> */}

                <li>
                  <Link
                    to="#"
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#upload-report-manually">
                    Custom Upload
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="#">
                    Report Retrieve (TXN)
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    QR Creation
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Download
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Contact Admin
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search">
            <input
              id="search-input"
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="dropdown text-end">
            <div
              style={{
                cursor: "pointer",
              }}
              className="d-block link-dark text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              {/* <span className="material-symbols-outlined">account_circle</span> */}

              <img
                className="bi me-2"
                width="45"
                height="45"
                role="img"
                alt="Header Logo"
                aria-label="Report Maker"
                src={pic}
              />
            </div>
            <ul className="dropdown-menu text-small">
              <li>
                <Link className="dropdown-item" to="/profile-setting">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/server-setting">
                  Server Settings
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item">Sign out</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
