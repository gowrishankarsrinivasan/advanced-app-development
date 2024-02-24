import { useState } from "react";
import "/src/assets/Css/signUp.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="signup-left-content">
          <h1 className="Signup-left-header">Join Our</h1>
          <span>Community!</span>
          <p>Get exclusive access to our features by signing up today.</p>
        </div>
      </div>
      <div className="signup-form-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="signup-form-container-input">
            <h1>Register here</h1>
            <div className="signup-form-container-input-name">
              <input
                required
                name="first_name"
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
              <input
                required
                name="last_name"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <input
              required
              name="mobileNumber"
              type="tel"
              placeholder="Contact Number"
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
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
            <button className="signup-btn" type="submit">
              <strong>Submit</strong>
            </button>
            <p>
              Already have an account?{" "}
              <Link to="/routeTo/login">
                <span>Login</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
