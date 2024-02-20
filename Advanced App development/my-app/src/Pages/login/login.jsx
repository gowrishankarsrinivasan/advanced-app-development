import React from "react";
import "/src/assets/Css/login.css";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import video from "/src/assets/Media/video.mp4";
import { useNavigate } from "react-router-dom";
import Signup from "./signUp";

const Login = () => {
  const navigate = useNavigate();
  const ClickSignUp=()=>{
    navigate("/routeTo/signUp");
  }
  return (
    <div className="loginPage">
      <div className="loginPage-container">
        <div className="login-left">
          <div className="login-video-container">
            <div className="login-left-content">
              <span className="login-left-content-span">
                Welcome
                <br /> Some descriptive
                <br /> text goes here...
              </span>
              <div className="login-actions">
                <span>Don't you have an account?</span>
                <button className="signup-btn" onClick={ClickSignUp}>Sign Up</button>
              </div>
            </div>
            <video className="video-bg" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="login-right">
          <div className="login-header">
            <header>Welcome back</header>
          </div>
          <div className="loginForm-container">
            <form>
              <div className="login-inputs">
                <label htmlFor="username">Username</label>
                <div className="input-container">
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
                <div className="input-container">
                  <BsFillShieldLockFill />
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
            <button type="submit" className="login-btn" onClick={ClickSignUp}>
              <span>Login</span>
              <AiOutlineSwapRight />
            </button>
            <div className="login-footer-links">
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
