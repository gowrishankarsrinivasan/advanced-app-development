import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "/src/assets/Css/LoginComponents/forgotPage.css";

const ForgotPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle password change
    toast.info("Password changed successfully");
  };

  return (
    <div className="forgot-password-container-wrapper">
      <div className="forgot-password-container">
        <header className="forgot-password-header">
          <h2>Reset Your Password</h2>
          <p>Enter your new password below.</p>
        </header>
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Current Password"
              className="input-field-inputs"
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              className="input-field-inputs"
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
              className="input-field-inputs"
            />
          </div>
          <button type="submit" className="reset-password-btn">
            Reset Password
          </button>
          <p className="login-link">
            Remember your password?{" "}
            <Link to="/bec.com/login">Sign in here</Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ForgotPassword;
