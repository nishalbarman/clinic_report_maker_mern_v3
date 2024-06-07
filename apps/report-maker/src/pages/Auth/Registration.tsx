import { Link } from "react-router-dom";

function RegistrationForm() {
  return (
    <div className="main">
      <form
        action=""
        className="registration"
        method="post"
        encType="multipart/form-data">
        <h1>Register</h1>

        <label className="pure-material-textfield-outlined">
          <input
            type="text"
            className="form-control"
            aria-label="Full name"
            aria-describedby="inputGroup-sizing-lg"
            placeholder="Name"
            name="name"
          />
        </label>

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

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            +91
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Phone"
            aria-label="Phone Number"
            aria-describedby="basic-addon1"
            name="phone"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Profile Picture
          </label>
          <input
            name="image"
            className="form-control"
            type="file"
            id="formFile"
            accept="image/*"
          />
        </div>

        <label className="pure-material-textfield-outlined">
          <input
            type="password"
            className="form-control"
            aria-label="Password"
            aria-describedby="inputGroup-sizing-lg"
            id="inputPassword"
            placeholder="Password"
            name="password"
          />
        </label>

        <label className="pure-material-textfield-outlined">
          <input
            type="password"
            className="form-control"
            aria-label="Password"
            aria-describedby="inputGroup-sizing-lg"
            id="inputPassword"
            placeholder="Confirm Password"
            name="cpassword"
          />
        </label>

        <label className="pure-material-checkbox">
          <input type="checkbox" required />
          <span>
            I agree to the{" "}
            <Link
              to="#"
              target="_blank"
              title="Actually not a Terms of Service">
              Terms of Service
            </Link>
          </span>
        </label>

        <input
          id="button"
          name="submit"
          type="submit"
          style={{ width: "70%" }}
          className="btn btn-outline-success btn-lg"
          value="SignUp"
        />

        <div className="done">
          <h1>👌 Registering!</h1>
          <Link
            className="pure-material-button-text"
            to="javascript:window.location.reload(true)">
            Try Again
          </Link>
        </div>
        <div className="progress">
          <progress className="pure-material-progress-circular"></progress>
        </div>
      </form>

      <div className="left-footer">
        Health Kind Lab
        <br />
        <Link to="#" target="_top">
          Twitter
        </Link>{" "}
          |  
        <Link to="#" target="_top">
          LinkedIn
        </Link>{" "}
          |  
        <Link to="#" target="_top">
          CodePen
        </Link>
      </div>
      <div className="right-footer">
        Check out
        <br />
        <Link to="/auth/login">LogIn Instead</Link>
      </div>
    </div>
  );
}

export default RegistrationForm;
