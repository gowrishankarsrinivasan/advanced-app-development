import { useState } from "react";
import "/src/assets/Css/signUp.css";
import { Link, json } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = localStorage.getItem("users");
    let existingData = [];
  
    if (data) {
      existingData = JSON.parse(data);
    }
  
    const newUser = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
  
    existingData.push(newUser); // Add the new user data to the existing array
  
    localStorage.setItem("users", JSON.stringify(existingData)); // Update localStorage
  
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  

  return (
    <div className="signup-container">
      <div className="signup-left">
      </div>
      <div className="signup-form-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h1>Sign up</h1>
          <div className="signup-form-container-input">
            <input
              required
              name="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              required
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <button className="signup-btn" type="submit">
              <strong>Sign up</strong>
            </button>
            <p>
              Already have an account?{" "}
              <Link to="/routeTo/login">
                <span>Sign in instead</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
