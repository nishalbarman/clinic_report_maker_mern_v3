import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { setUserAuthData, useAppDispatch } from "../../redux";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/auth/login`,
        { email, password }
      );

      if (response.data?.user) {
        // localStorage.setItem("token", response.data.token);
        dispatch(setUserAuthData(response.data.user));
        navigate("/dashboard"); // Redirect to the dashboard or another page
      } else {
        setError("Unknown error occured. Please try again.");
      }
    } catch (err) {
      console.log(err);
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <form
        className="registration"
        onSubmit={handleSubmit}
        encType="multipart/form-data">
        <h1>👋 Welcome!</h1>

        {error && <p className="error-message">{error}</p>}

        <label className="pure-material-textfield-outlined">
          <input
            type="email"
            className="form-control"
            aria-label="Email Id"
            placeholder="example@email.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="pure-material-textfield-outlined">
          <input
            type="password"
            className="form-control"
            aria-label="Password"
            id="inputPassword"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        {/* <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Role
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required>
            <option value="">Choose...</option>
            <option value="2">User</option>
            <option value="1">Admin</option>
            <option value="0">Technician</option>
          </select>
        </div> */}

        <input
          id="button"
          type="submit"
          style={{ width: "70%" }}
          className="btn btn-outline-success btn-lg"
          name="submit"
          value="Log In"
          disabled={loading}
        />

        {loading && (
          <div className="progress">
            <progress className="pure-material-progress-circular"></progress>
          </div>
        )}
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
};

export default LoginForm;
