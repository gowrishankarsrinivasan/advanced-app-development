import React from "react";
import "/src/assets/Css/login.css";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import video from "/src/assets/Media/video.mp4";

const Login = () => {
  return (
    <div className="loginPage">
      <div className="loginPage-container">
        <div className="login-left">
          <div className="login-left-container-content">
            <div className="login-left-container-content-inner-top">
              <span>
                Welcome
                <br />
                Some descriptive
                <br /> text goes here...
              </span>
            </div>
            <div className="login-left-container-content-inner-bottom">
              <span className="login-left-container-content-inner-content">
                don't you have an account?
              </span>
              <button className="login-container-signup-btn">Sign Up</button>
            </div>
          </div>
          <video className="video-bg" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="login-right">
            <header className="login-right-header">Welcome back</header>

          <form className="loginForm-container">
            <div className="login-inputs">
              <label htmlFor="username">Username</label>
              <div className="login-input-container">
                <FaUserShield />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username..."
                />
              </div>
            </div>

            <div className="login-inputs">
              <label htmlFor="password">Password</label>
              <div className="login-input-container">
                <BsFillShieldLockFill />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password..."
                />
              </div>
            </div>
          </form>
          <div className="login-right-footer">
            <button type="submit" className="form-container-btn">
              <span>Login</span>
              <AiOutlineSwapRight />
            </button>
            <div className="login-right-footer-links">
              <span className="forgot-password">
                Forgot your Password?<a href="#">Click Here</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
