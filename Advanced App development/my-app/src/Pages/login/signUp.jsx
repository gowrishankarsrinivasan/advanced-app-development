import { useState } from "react";
import "/src/assets/Css/signUp.css";
import { Link, json } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = localStorage.getItem("users");
    let existingData = [];

    if (data) {
      existingData = JSON.parse(data);
    }

    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    // existingData.push(newUser); // Add the new user data to the existing array

    // localStorage.setItem("users", JSON.stringify(existingData)); // Update localStorage

    try {
      const response = await axios.post(
        "http://127.0.0.1:8181/api/v1/user/register",
        newUser
      );
      console.log("Data stored in DB:", response.data);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error storing data in DB:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left"></div>
      <div className="signup-form-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h1>Sign up</h1>
          <div className="signup-form-container-input">
            <input
              required
              name="username"
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
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
              <Link to="/bec.com/login">
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
