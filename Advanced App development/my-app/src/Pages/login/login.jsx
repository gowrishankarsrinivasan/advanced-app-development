import React, { useState } from "react";
import "/src/assets/Css/login.css"; // Import CSS for styling
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    try {
      const response = await axios.post(
        "http://127.0.0.1:8181/api/v1/auth/login",
        data
      );
      // Handle success response
    } catch (error) {
      // Handle error response
      console.error("Error:", error);
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
