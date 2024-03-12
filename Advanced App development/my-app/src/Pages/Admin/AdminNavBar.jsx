import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import "/src/assets/Css/nav.css";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import img from "/src/assets/Images/avt.jpg";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { RiMenuFoldLine } from "react-icons/ri";
import { SiGooglebigquery } from "react-icons/si";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";
import { FaAmazonPay } from "react-icons/fa6";
import { useSelector } from "react-redux";
const Navbar = () => {
  const getEmail = useSelector((state) => state.auth.sub);
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
    nav("/bec.com/user/profile");
  };
  const handleLogout = () => {
    nav("/bec.com/signUp");
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
      <div className="navbar-right">
        <div className="profile-icon" ref={profileDropdownRef}>
          <CgProfile onClick={toggleProfileDropdown} />
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <button onClick={handleLogout} className="nav-logout-button">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <button className="close-sidebar" onClick={toggleSidebar}>
            <RiMenuFoldLine className="nav-menu" />
          </button>
        </div>
        <div className="sidebar-profile">
          <Link to="/bec.com/user/profile">
            <img
              className="sidebar-items-img"
              src={img}
              style={{ height: "200px", width: "200px" }}
            />
          </Link>
          <div className="profile-name-container">
            <h4>{getEmail}</h4>
          </div>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-items">
            <MdDashboard />
            <Link to="/bec.com/admin/dashboard">DashBoard</Link>
          </div>
          <div className="sidebar-items">
            <MdOutlineSwitchAccessShortcutAdd />
            <Link to="/bec.com/admin/courseAddForm">Add Course</Link>
          </div>
          <div className="sidebar-items">
            <FaAmazonPay />
            <Link to="/bec.com/admin/adminPayDisplay">Payments</Link>
          </div>
          <div className="sidebar-items">
            <SiGooglebigquery />
            <Link to="/bec.com/admin/reply">Enquiry</Link>
          </div>
          <div className="sidebar-items">
            <SiGooglebigquery />
            <Link to="/bec.com/admin/coursesEnrolled">Enrolled Courses</Link>
          </div>
          <div className="sidebar-items">
            <IoMdLogOut />
            <Link to="/bec.com/signUp">Log out</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
