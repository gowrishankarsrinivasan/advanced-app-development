import React, { useState } from "react";
import "/src/assets/Css/Admincss/queryReply.css";
import emailjs from "emailjs-com";
import {to}

const ReplyPage = () => {
  const [replyMessage, setReplyMessage] = useState("");

  const handleSubmitReply = async (e) => {
    e.preventDefault();

    const service_id = "service_2lopgme";
    const template_id = "template_v2hm99i";
    const public_id = "Q5pCEShRxFHCuXGE6";
    const courseName = "Java";
    const email = "22lecs013@skcet.ac.in";
    const enquiryType = "complaint";
    const message = "hi";

    // Constructing the email content
    const templateParams = {
      to_email: email,
      to_name: "to you",
      from_name: "Shankar Bhai", // Change this to your name or the sender's name
      courseName: courseName,
      enquiryType: enquiryType,
      message: message,
      replyMessage: replyMessage,
    };

    // Sending email using emailjs
    emailjs
      .send(service_id, template_id, templateParams, public_id)
      .then((response) => {
        
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="reply-container">
      <div className="reply-message-img"></div>
      <div className="reply-wrapper">
        <h2>Reply to Enquiry</h2>
        <div className="enquiry-details">
          <h3>Course Name:</h3>
          <p id="courseName">React Development</p>
          <h3>Email:</h3>{" "}
          <p id="email">gowrishankarsrinivasan3@gmail.com@example.com</p>
          <h3>Enquiry Type:</h3> <p id="enquiryType">Complaint</p>
          <h3>Message:</h3>
          <p id="message">Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="reply-form">
          <form onSubmit={handleSubmitReply}>
            <div className="form-group">
              <label htmlFor="replyMessage">Reply Message:</label>
              <textarea
                id="replyMessage"
                name="replyMessage"
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                rows="4"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Send Reply</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReplyPage;
