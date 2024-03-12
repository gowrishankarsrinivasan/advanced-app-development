import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import "/src/assets/Css/nav.css";
import { DiCoda } from "react-icons/di";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

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
      <div className="navbar-left">
        <DiCoda className="nav-menu" style={{ color: "#1b98e0" }} />
        <p>
          Certify<span>Ease</span>
        </p>
      </div>
      <ul className="navbar-center">
        <li>
          <Link to="/bec.com/user/home">Home</Link>
        </li>
        <li>
          <Link to="/bec.com/user/courseList" href="#">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/bec.com/user/query">Enquiry</Link>
        </li>
        <li>
          <Link to="/bec.com/user/status">Notifications</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <div className="profile-icon" ref={profileDropdownRef}>
          <CgProfile onClick={toggleProfileDropdown} />
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
    </nav>
  );
};
export default Navbar;
