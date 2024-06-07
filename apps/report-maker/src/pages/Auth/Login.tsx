import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="main">
      <form
        className="registration"
        action=""
        method="post"
        encType="multipart/form-data">
        <h1>👋 Welcome!</h1>

        <label className="pure-material-textfield-outlined">
          <input
            type="text"
            className="form-control"
            aria-label="Email Id"
            aria-describedby="inputGroup-sizing-lg"
            placeholder="example@email.com"
            name="email"
          />
        </label>

        <label className="pure-material-textfield-outlined">
          <input
            type="password"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            id="inputPassword"
            placeholder="Password"
            name="password"
          />
        </label>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Role
          </label>
          <select className="form-select" id="inputGroupSelect01" name="role">
            <option defaultValue="">Choose...</option>
            <option value="2">User</option>
            <option value="1">Admin</option>
            <option value="0">Technician</option>
          </select>
        </div>

        <input
          id="button"
          type="submit"
          style={{ width: "70%" }}
          className="btn btn-outline-success btn-lg"
          name="submit"
          value="Log In"
        />

        <div className="done">
          <h1>👌 Authenticating!</h1>
          <a
            className="pure-material-button-text"
            href="javascript:window.location.reload(true)">
            Try Again
          </a>
        </div>
        <div className="progress">
          <progress className="pure-material-progress-circular"></progress>
        </div>
      </form>

      <div className="left-footer">
        Health Kind Lab
        <br />
        <a href="#" target="_top">
          Twitter
        </a>
          |  
        <a href="#" target="_top">
          LinkedIn
        </a>
          |  
        <a href="#" target="_top">
          CodePen
        </a>
      </div>
      <div className="right-footer">
        Check out
        <br />
        <Link to="/auth/reg">SignUp Instead</Link>
      </div>
    </div>
  );
}

export default LoginForm;
