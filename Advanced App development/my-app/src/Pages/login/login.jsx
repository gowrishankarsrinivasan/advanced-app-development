import React from "react";
import "/src/assets/Css/login.css";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import video from "/src/assets/Media/video.mp4";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const ClickSignUp = () => {
    navigate("/routeTo/signUp");
  };
  return (
    <div className="loginPage">
      <div className="loginPage-container">
        <div className="login-left">
          <div className="login-video-container">
            <div className="login-left-content">
              <span className="login-left-content-span">
                Hello
                <br /> Create your
                <br /> account here...
              </span>
              <div className="login-actions">
                <span>Don't you have an account?</span>
                <button className="loginpage-btn" onClick={ClickSignUp}>
                  Sign Up
                </button>
              </div>
            </div>
            <video className="video-bg" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="login-right">
          <div className="login-header">
            <header>Welcome back!</header>
          </div>
          <div className="loginForm-container">
            <form>
              <div className="login-inputs">
                <label htmlFor="username" className="top-label">
                  Username
                </label>
                <div className="input-container">
                  <FaUserShield className="react-icon" />
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter Username..."
                  />
                </div>
              </div>

              <div className="login-inputs">
                <label htmlFor="password" className="bottom-label">
                  Password
                </label>
                <div className="input-container">
                  <BsFillShieldLockFill className="react-icon" />
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password..."
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="login-footer">
            <button
              type="submit"
              className="loginpage-btn"
              onClick={ClickSignUp}
            >
              <span>Login</span>
              <AiOutlineSwapRight className="login-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
