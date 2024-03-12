import React, { useState } from "react";
import "/src/assets/Css/login.css"; // Import CSS for styling
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../services/auth";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../Redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      toast.warn("Please enter email and password");
      return;
    }

    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    try {
      const response = await login(data);
      const decode = jwtDecode(response?.data?.access_token);
      console.log("Decoded token:", decode);
      const { exp, iat, role, sub } = decode;
      dispatch(loginSuccess({ exp, iat, role, sub }));
      console.log("Login data stored in Redux:", { exp, iat, role, sub });
      if (decode.role === "ADMIN") {
        navigate("/bec.com/admin/dashboard");
      } else if (decode.role === "USER") {
        navigate("/bec.com/user/home");
      }
    } catch (error) {
      toast.error("User not found");
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="left-half"></div>
      <div className="right-half">
        <header className="login-header">
          <h2>
            Sign In to Your <br />
            <span style={{ color: " #1b98e0" }}>Account</span>
          </h2>
        </header>

        <div className="right-half-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                className="input-field-inputs"
                type="email"
                value={email}
                onChange={handleEmailChange} // Use handleEmailChange to track changes and clear error
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <input
                className="input-field-inputs"
                type="password"
                value={password}
                onChange={handlePasswordChange} // Use handlePasswordChange to track changes and clear error
                placeholder="Password"
              />
            </div>
            <div className="form-bottombar">
              <Link to="/forgot-password" className="login-link">
                Forgot password?
              </Link>

              <button className="login-btn" type="submit">
                Sign In
              </button>
              <p
                className="login-p"
                style={{
                  position: "relative",
                  top: "20px",
                  marginLeft: "30px",
                  fontSize: "18px",
                }}
              >
                Don't you have an account?
                <Link to="/bec.com/signUp" className="login-link">
                  <span>Register</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
