import React from "react";
import "/src/assets/Css/nav.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/path/to/logo.png" alt="Logo" className="logo" />
        </div>
        <ul className="navbar-center">
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
          <li>
            <a href="#">Item 3</a>
          </li>
          <li>
            <a href="#">Item 4</a>
          </li>
        </ul>
        <div className="navbar-right">
          <button className="logout-btn">Logout</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
