import { useState } from "react";
import "/src/assets/Css/signUp.css";
import { Link, json } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { register } from "../../services/auth";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const user = "USER";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      mobile.trim() === "" ||
      mobile.trim().length !== 10 ||
      !passwordRegex.test(password)
    ) {
      if (name.trim() === "") {
        toast.warning("Please enter your name");
      }
      if (email.trim() === "") {
        toast.warning("Please enter your email");
      }
      if (password.trim() === "") {
        toast.warning("Please enter your password");
      } else if (!passwordRegex.test(password)) {
        toast.warning("Set the password strongly to your email address");
      }
      if (mobile.trim() === "") {
        toast.warning("Please enter your mobile number");
      }
      if (mobile.trim().length !== 10) {
        toast.warning("Mobile number should be 10 digits.");
      }
    } else {
      const newUser = {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        role: user,
      };
      await register(newUser)
        .then((res) => {
          setName("");
          setEmail("");
          setMobile("");
          setPassword("");
          toast.success("Registration successful!");
        })
        .catch((error) => {
          console.error("Registration failed:", error);
          toast.error("Registration failed. Please try again later.");
        });
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
              placeholder="Username..."
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="mobile number..."
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <input
              required
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              required
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
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
      <ToastContainer />
    </div>
  );
};

export default Signup;
