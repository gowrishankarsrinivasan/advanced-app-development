import React, { useState } from "react";
import "/src/assets/Css/enquiry.css"; // Adjust the path to your CSS file
import { queryPost } from "../../services/auth";

const EnquiryForm = () => {
  const [courseName, setCourseName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      course_name: courseName,
      email: email,
      enquiry_type: enquiryType,
      message: message,
    };
    try {
      await queryPost(data).then((res) => {
        console.log(res.data);
        setCourseName("");
        setEmail("");
        setEnquiryType("");
        setMessage("");
      });
    } catch (error) {
      console.error(error);
    }
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
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={enquiryType}
                  onChange={(e) => setEnquiryType(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
