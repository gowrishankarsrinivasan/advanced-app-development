import React, { useState, useEffect, useRef } from "react";
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
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const nav = useNavigate();

  const handleProfile = () => {
    nav("/user/profile");
  };
  const handleLogout = () => {
    nav("/routeTo/signUp");
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
        <div ref={profileDropdownRef}>
          <CgProfile className="profile-icon" onClick={toggleProfileDropdown} />
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <button onClick={handleProfile} className="nav-logout-button">
                Profile
              </button>
              <button onClick={handleLogout} className="nav-logout-button">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          <RiMenuFoldLine className="nav-menu" />
        </button>
        <div className="sidebar-profile">
          <Link to="/user/profile">
            <img className="sidebar-items-img" src={img} />
          </Link>
          <p className="profile-name">Profile name</p>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-items">
            <IoMdHome />
            <Link to="/user/home">Home</Link>
          </div>
          <div className="sidebar-items">
            <IoMdHome />
            <Link to="/product">DashBoard</Link>
          </div>
          <div className="sidebar-items">
            <MdDashboard />
            <Link to="/user/courseList">Add Course</Link>
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
