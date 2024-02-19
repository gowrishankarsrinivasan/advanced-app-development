import { useState } from "react";
import "/src/assets/Css/signUp.css";
import video from "/src/assets/Media/video.mp4";
const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <video className="video-bg" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <form onSubmit={handleSubmit}>
          <div className="signup-form-container-input">
            <h1>Register here</h1>
            <div className="signup-form-container-input-name">
              <input
                required
                name="first_name"
                type="text"
                placeholder="first name"
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
              <input
                required
                name="last_name"
                type="text"
                placeholder="last_name"
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
            <button className="btn">
              <strong>Submit</strong>
            </button>
            <strong>Already have an account?Login</strong>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
