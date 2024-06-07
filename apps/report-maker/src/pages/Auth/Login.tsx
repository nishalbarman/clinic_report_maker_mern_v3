import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";
import { setUserAuthData, useAppDispatch } from "../../redux";
import { toast } from "react-toastify";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function fetchAndConvertToBase64(imageUrl: string) {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      const base64String = await blobToBase64(blob);

      return base64String;
    } catch (error) {
      console.error("Error fetching or converting image:", error);
      throw error;
    }
  }

  function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string)?.split(",")[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(blob);
    });
  }

  // const [localPictureString, setLocalProfilePicture] = useState<string>();

  // useEffect(() => {
  //   if (pic !== undefined) {
  //     fetchAndConvertToBase64(pic)
  //       .then((localProfilePicture) => {
  //         console.log(localPictureString);
  //         setLocalProfilePicture(localProfilePicture);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }
  // }, [pic]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    setError(null);
    const id = toast.loading("Please wait...We are logging you in");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/auth/login`,
        { email, password }
      );

      if (response.data?.user) {
        // const localPictureString = await fetchAndConvertToBase64(
        //   response.data?.user.pic
        // );
        // response.data.user.pic = localPictureString;

        dispatch(setUserAuthData(response.data.user));
        navigate("/dashboard"); // Redirect to the dashboard or another page
      } else {
        setError("Unknown error occured. Please try again.");
      }
      toast.update(id, {
        type: "success",
        autoClose: 2000,
        isLoading: false,
        render: response.data?.message || "Login successful",
      });
    } catch (err) {
      console.log(err);

      let message = "";

      if (err instanceof AxiosError) {
        message = err.response?.data?.message;
      }

      message = (err as Error).message;

      toast.update(id, {
        type: "error",
        autoClose: 2000,
        isLoading: false,
        render: message || "Invalid credentials. Please try again.",
      });

      // setError("Invalid credentials. Please try again.");
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
