import { Link } from "react-router-dom";

import headerLogo from "../assets/logo/hk.png";

function HeaderNonAuth() {
  return (
    <div className="px-5">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          {/* Uncomment and use one of the following SVGs if needed */}

          <img
            className="bi me-2"
            width="45"
            height="45"
            role="img"
            aria-label="Report Maker"
            src={headerLogo}
            alt="Report Maker"
          />
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="#top" className="nav-link px-2 link-dark">
              Home
            </Link>
          </li>
          <li>
            <Link to="#icon-grid" className="nav-link px-2 link-dark">
              Features
            </Link>
          </li>
          {/* Uncomment if needed */}
          {/* <li><Link to="#pricing" className="nav-link px-2 link-dark">Pricing</Link></li> */}
          {/* <li><Link to="#" className="nav-link px-2 link-dark">FAQs</Link></li> */}
          <li>
            <Link to="#hanging-icons" className="nav-link px-2 link-dark">
              About
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <>
            <Link to={"/auth/login"} className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link to={"/auth/login"} className="btn btn-primary">
              Sign-up
            </Link>
          </>
        </div>
      </header>
    </div>
  );
}

export default HeaderNonAuth;
