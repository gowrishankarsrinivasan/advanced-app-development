import React, { useState } from "react";
import "/src/assets/Css/login.css"; // Import CSS for styling
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const storedUserData = localStorage.getItem("user");
    let data = null;
  
    if(email.trim() ==="" && password.trim() === "" ){
      toast.warn("Please enter email and password");
    }
    if (storedUserData) {
      data = JSON.parse(storedUserData);
    }
    console.log("Data from localStorage:", data); // Add this line for debugging
  
    let match = false;
  
    // Check if data exists and email/password match
    if (data && data.email === email && data.password === password) {
      match = true;
    }
  
    if (match) {
      toast.success("Logged in successfully");
      console.log("User logged");
    } else if(email.trim()!=="" && password.trim()!=="" && !match) {
      toast.error("User not found");
      setEmail("");
      setPassword("");
    }
  };
  
  

  // Clear error message when user starts typing
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container">
      <div className="left-half"></div>
      <div className="right-half">
        <header className="login-header">
          <h2>
            Sign In to Your <span style={{ color: "orangered" }}>Account</span>
          </h2>
        </header>
        <div className="social-icons">
          <FaFacebook className="react-icons" />
          <FaLinkedinIn className="react-icons" />
          <IoMdMail className="react-icons" />
        </div>
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
              <Link to="#" className="login-link">
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
                <Link to="/routeTo/signUp" className="login-link">
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
