import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import "/src/assets/Css/nav.css";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import img from "/src/assets/Images/Logo.png";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { RiMenuFoldLine } from "react-icons/ri";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const nav = useNavigate();

  const handleClick = () => {
    nav("/user/profile");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={toggleSidebar}>
        <MdOutlineMenuOpen className="nav-menu" />
        <p>
          Certify<span>Ease</span>
        </p>
      </div>
      <ul className="navbar-center">
        <li>
          <Link to="/user/home">Home</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="navbar-right">
        <CgProfile onClick={handleClick} className="profile-icon" />
        <button className="nav-logout-btn">Logout</button>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
        <RiMenuFoldLine className="nav-menu"/>
        </button>
        <div className="sidebar-profile">
          <Link to="/user/profile"><img className="sidebar-items-img" src={img} /></Link>
          <p className="profile-name">Profile name</p>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-items">
            <IoMdHome />
            <Link to="/product">Home</Link>
          </div>
          <div className="sidebar-items">
            <IoMdHome />
            <Link to="/product">DashBoard</Link>
          </div>
          <div className="sidebar-items">
            <MdDashboard />
            <Link to="/product">Add Course</Link>
          </div>
          <div className="sidebar-items">
            <IoMdHome />
            <Link to="/product">About us</Link>
          </div>
          <div className="sidebar-items">
            <IoMdHome />
            <Link to="/product">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
