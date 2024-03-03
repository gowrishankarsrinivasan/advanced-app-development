import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "/src/assets/Css/LoginComponents/forgotPage.css";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send password reset link to the provided email address
    toast.info("Password reset link sent to your email");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="forgot-password-container-wrapper">
    <div className="forgot-password-container">
      <header className="forgot-password-header">
        <h2>Forgot Your Password?</h2>
        <p>Enter your email address to receive a password reset link.</p>
      </header>
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="input-field-inputs"
          />
        </div>
        <button type="submit" className="reset-password-btn">Reset Password</button>
        <p className="login-link">
          Remember your password? <Link to="/bec.com/login">Sign in here</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default ForgotPassword;
