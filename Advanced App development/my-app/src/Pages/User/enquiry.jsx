import React, { useState } from "react";
import "/src/assets/Css/enquiry.css"; // Adjust the path to your CSS file

const EnquiryForm = () => {
  const [enquiryData, setEnquiryData] = useState({
    courseName: "",
    description: "",
    email: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiryData({ ...enquiryData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission, e.g., send enquiry data to backend
    console.log("Enquiry submitted:", enquiryData);
    // Reset form fields
    setEnquiryData({
      courseName: "",
      description: "",
      email: "",
      enquiryType: "",
      message: "",
    });
  };

  return (
    <div className="enquiry-wrapper">
      <div className="enquiry-left"></div>
      <div className="enquiry-right">
        <div className="enquiry-form">
          <h2>Submit Enquiry</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="enquiry-form-items">
                <label className="input-label" htmlFor="courseName">
                  Course Name:
                </label>
                <input
                  className="enquery-input-field"
                  type="text"
                  id="courseName"
                  name="courseName"
                  value={enquiryData.courseName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="enquiry-form-items">
                <label className="input-label" htmlFor="email">
                  Email:
                </label>
                <input
                  className="enquery-input-field"
                  type="email"
                  id="email"
                  name="email"
                  value={enquiryData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="enquiry-form-items">
                <label className="input-label" htmlFor="enquiryType">
                  Enquiry Type:
                </label>
                <select
                  className="input-select"
                  id="enquiryType"
                  name="enquiryType"
                  value={enquiryData.enquiryType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Enquiry Type</option>
                  <option value="complaint">Complaint</option>
                  <option value="suggestion">Suggestion</option>
                </select>
              </div>
              <div className="enquiry-form-message">
                <label className="textarea-label" htmlFor="message">
                  Message:
                </label>
                <textarea
                  className="textarea-field"
                  id="message"
                  name="message"
                  value={enquiryData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="form-querry-button">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
