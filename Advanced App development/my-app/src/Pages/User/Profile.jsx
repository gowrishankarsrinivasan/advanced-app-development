import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import img from "/src/assets/Images/avatar.jpg";
import "/src/assets/Css/profile.css";

const Profile = () => {
  const userData = {
    name: "Shankar",
    address: "Coimbatore, Tamil Nadu",
    Role: "Admin",
    Email_Address: "gowrishankardivakar7@gmail.com",
    Phone_Number: "1234567890",
    age: "20",
    profilePicture: img,
  };

  return (
    <div className="profile-container">
      <div className="profile-left">
        <div className="profile-header-info">
          <h1>My Account</h1>
          <h1>
            Certify<span style={{ color: "black" }}>Ease</span>
          </h1>
        </div>
        <div className="profile-info-container-wrapper">
          <p className="profile-headder-info">User info</p>
          <div className="profile-info-container">
            <div className="profile-info1">
              <div className="profile-info-row">
                <div className="profile-info-input-container">
                  <label className="profile-left-label">First name</label>
                  <input
                    className="profile-info-input"
                    placeholder="Gowri shankar"
                  />
                </div>
              </div>
              <div className="profile-info-row">
                <div className="profile-info-input-container">
                  <label className="profile-left-label">Last name</label>
                  <input className="profile-info-input" placeholder="S" />
                </div>
              </div>
            </div>
            <div className="profile-info1">
              <div className="profile-info-row">
                <div className="profile-info-input-container">
                  <label className="profile-left-label">User name</label>
                  <input className="profile-info-input" placeholder="gowri@" />
                </div>
              </div>
              <div className="profile-info-row">
                <div className="profile-info-input-container">
                  <label className="profile-left-label">Email address</label>
                  <input
                    className="profile-info-input"
                    placeholder="abc@gmail.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="profile-headder-info">Contact information</p>
        <div className="profile-contact-wrapper">
          <div className="profile-contact-container">
            <div className="profile-contact-row1">
              <label className="pro-con-label">Address</label>
              <input type="text" className="pro-con-input"></input>
            </div>

            <div className="profile-contact-row2">
              <div className="profile-contact-row2-items">
                <label className="pro-con-label">State</label>
                <input
                  type="text"
                  placeholder="Tamil nadu"
                  className="pro-con-input"
                ></input>
              </div>
              <div className="profile-contact-row2-items">
                <label className="pro-con-label">City</label>
                <input
                  type="text"
                  placeholder="Coimbatore"
                  className="pro-con-input"
                ></input>
              </div>
              <div className="profile-contact-row2-items">
                <label className="pro-con-label">Postal code</label>
                <input
                  type="text"
                  placeholder="Postal code"
                  className="pro-con-input"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <p className="profile-headder-info">About me</p>
        <div className="profile-left-about-container">
          <p className="pro-con-label">About me</p>
          <textarea></textarea>
        </div>
      </div>
      <div className="profile-card">
        <div className="gradient-container">
          <FaArrowLeft
            style={{ fontSize: "20px", marginLeft: "20px", marginTop: "30px" }}
          />
          <BsThreeDotsVertical
            style={{
              fontSize: "20px",
              marginRight: "20px",
              marginTop: "30px",
              fontWeight: "bolder",
            }}
          />
        </div>

        <div
          className="profile-content"
          style={{
            height: "350px",
            color: "black",
          }}
        >
          <div className="profile-image">
            <img src={userData.profilePicture} alt="Profile" />
          </div>
          <h1
            className="profile-heading"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            {userData.name}
          </h1>
          <p
            className="profile-subheading"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            {userData.address}
          </p>

          <div className="profile-info">
            <div className="info-row">
              <p>Age</p>
              <div className="info-row-data">
                <p>: {userData.age}</p>
              </div>
            </div>
            <div className="info-row">
              <p>Role</p>
              <div className="info-row-data">
                <p>: {userData.Role}</p>
              </div>
            </div>
            <div className="info-row">
              <p>Email</p>
              <div className="info-row-data">
                <p>: {userData.Email_Address}</p>
              </div>
            </div>
            <div className="info-row">
              <p>Phone</p>
              <div className="info-row-data">
                <p>: {userData.Phone_Number}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-bottom">
          <button className="profile-bottom-btn">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
