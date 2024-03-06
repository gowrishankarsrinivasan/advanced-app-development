import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import img from "/src/assets/Images/avatar.jpg";
import "/src/assets/Css/profile.css";
import axios from "axios";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const userData = {
    name: "Shankar",
    address: "Coimbatore, Tamil Nadu",
    Role: "Admin",
    Email_Address: "gowrishankardivakar7@gmail.com",
    Phone_Number: "1234567890",
    age: "20",
    profilePicture: img,
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [Postal, setPoastal] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();
    setIsEdit(false);
    const data = {
      first_name: firstName,
      last_name: lastName,
      Mobile: Mobile,
      email: email,
      address: address,
      state: state,
      city: city,
      postal_code: Postal,
      about_me: aboutMe,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8181/profile/save",
        data
      );
      if (response.status === 200) {
      }
    } catch (error) {
      console.error(error);
    }
    setFirstName("");
    setLastName("");
    setMobile("");
    setEmail("");
    setAboutMe("");
    setCity("");
    setPoastal("");
    setAddress("");
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
                    disabled={!isEdit}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="profile-info-row">
                <div className="profile-info-input-container">
                  <label className="profile-left-label">Last name</label>
                  <input
                    className="profile-info-input"
                    placeholder="S"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={!isEdit}
                  />
                </div>
              </div>
            </div>
            <div className="profile-info1">
              <div className="profile-info-row">
                <div className="profile-info-input-container">
                  <label className="profile-left-label">Mobile Number</label>
                  <input
                    className="profile-info-input"
                    placeholder="1234567890"
                    value={Mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    disabled={!isEdit}
                  />
                </div>
              </div>
              <div className="profile-info-row">
                <div className="profile-info-input-container">
                  <label className="profile-left-label">Email address</label>
                  <input
                    className="profile-info-input"
                    placeholder="abc@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!isEdit}
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
              <input
                type="text"
                placeholder="Address"
                className="pro-con-input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                disabled={!isEdit}
              ></input>
            </div>

            <div className="profile-contact-row2">
              <div className="profile-contact-row2-items">
                <label className="pro-con-label">State</label>
                <input
                  type="text"
                  placeholder="Tamil nadu"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="pro-con-input"
                  disabled={!isEdit}
                ></input>
              </div>
              <div className="profile-contact-row2-items">
                <label className="pro-con-label">City</label>
                <input
                  type="text"
                  placeholder="Coimbatore"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="pro-con-input"
                  disabled={!isEdit}
                ></input>
              </div>
              <div className="profile-contact-row2-items">
                <label className="pro-con-label">Postal code</label>
                <input
                  type="text"
                  placeholder="Postal code"
                  value={Postal}
                  onChange={(e) => setPoastal(e.target.value)}
                  className="pro-con-input"
                  disabled={!isEdit}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <p className="profile-headder-info">About me</p>
        <div className="profile-left-about-container">
          <p className="pro-con-label">About me</p>
          <textarea
            className="pro-con-message"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            disabled={!isEdit}
          ></textarea>
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
          {isEdit ? (
            <button className="profile-bottom-btn" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button
              className="profile-bottom-btn"
              onClick={() => setIsEdit(true)}
            >
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
