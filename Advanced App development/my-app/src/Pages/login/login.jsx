import React from "react";
import "/src/assets/Css/login.css"; // Import CSS for styling
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const nav = useNavigate();
  const singin = () => {
    nav("/routeTo/signUp");
  };
  return (
    <div className="login-container">
      <div className="left-half">
        <h1 className="left-half-header">Welcome Back!</h1>
        <p className="left-half-content">To Keep Contactedd with us please</p>
        <p className="left-half-content">Login with your personal info</p>
      </div>
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
          <form className="login-form">
            <div className="input-field">
              <i className="material-icons" style={{ paddingLeft: "10px" }}>
                person
              </i>
              <input
                className="input-field-inputs"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <i className="material-icons">lock</i>
              <input
                className="input-field-inputs"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
            <button className="login-btn" type="submit" onClick={singin}>
              Sign In
            </button>
            <p
              style={{
                position: "relative",
                top: "20px",
                marginLeft: "30px",
                fontSize: "18px",
                color: "white",
              }}
            >
              Don't you have an account?
              <Link to="/routeTo/signUp">
                <span>Register</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
