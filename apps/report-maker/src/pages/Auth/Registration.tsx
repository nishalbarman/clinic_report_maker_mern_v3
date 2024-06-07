import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { convertImagesToBase64 } from "../../helper";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

type formDataProps = {
  name: string;
  email: string;
  phone: string;
  password: string;
  cpassword: string;
  pic: base64StringT[] | undefined;
};

type base64StringT = {
  base64String: string | ArrayBuffer | null;
  type: string;
};

function RegistrationForm() {
  const inititalFormData = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      password: "",
      cpassword: "",
      pic: undefined,
    }),
    []
  );

  const navigate = useNavigate();

  const [formData, setFormData] = useState<formDataProps>(inititalFormData);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "pic" && files) {
      const base64Converted = await convertImagesToBase64(files);
      setFormData({
        ...formData,
        [name]: base64Converted,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.cpassword) {
      setError("Passwords do not match!");
      return;
    }

    const id = toast.loading(
      "Please wait... We are creating a new account for you."
    );

    try {
      const result = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/auth/register`,
        formData
      );

      if (result.status === 200) {
        setSuccess(result.data.message);
        setError("");
        setFormData(inititalFormData);
        toast.update(id, {
          type: "success",
          autoClose: 2000,
          isLoading: false,
          render:
            result.data.message ||
            "Registration successful, You may login now.",
        });
        navigate("/auth/login");
      }
    } catch (error) {
      console.error(error);
      let err = "";
      if (error instanceof AxiosError) {
        setError(error.response?.data?.message || error.message);
        err = error.response?.data?.message || error.message;
      } else {
        setError((error as any).message || "Registration failed");
        err = (error as any).message || "Registration failed";
      }
      setSuccess("");
      toast.update(id, {
        type: "error",
        autoClose: 2000,
        isLoading: false,
        render: err,
      });
    }
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit} className="registration">
        <h1>Register</h1>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <label className="pure-material-textfield-outlined">
          <input
            type="text"
            className="form-control"
            aria-label="Full name"
            aria-describedby="inputGroup-sizing-lg"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label className="pure-material-textfield-outlined">
          <input
            type="email"
            className="form-control"
            aria-label="Email Id"
            aria-describedby="inputGroup-sizing-lg"
            placeholder="example@email.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            +91
          </span>
          <input
            type="tel"
            className="form-control"
            placeholder="Phone"
            aria-label="Phone Number"
            aria-describedby="basic-addon1"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Profile Picture
          </label>
          <input
            name="pic"
            className="form-control"
            type="file"
            id="formFile"
            accept="image/*"
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        <label className="pure-material-textfield-outlined">
          <input
            type="password"
            className="form-control"
            aria-label="Confirm Password"
            aria-describedby="inputGroup-sizing-lg"
            id="inputPassword"
            placeholder="Confirm Password"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
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
            to="#"
            onClick={() => window.location.reload()}>
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
