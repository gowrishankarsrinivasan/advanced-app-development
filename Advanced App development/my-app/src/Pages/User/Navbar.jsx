import React from "react";
import "/src/assets/Css/nav.css";
import img from "/src/assets/Images/Logo.png";
const Navbar = () => {
  return (
      <nav className="navbar">
        <div className="navbar-left">
          <p>Certify<span>Ease</span></p>
        </div>
        <ul className="navbar-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="navbar-right">
          <button className="logout-btn">Logout</button>
        </div>
      </nav>
  );
};

export default Navbar;
