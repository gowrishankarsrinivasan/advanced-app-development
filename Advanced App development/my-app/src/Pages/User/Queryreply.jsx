import React, { useState } from "react";
// import axios from "axios";
import "/src/assets/Css/Admincss/queryReply.css";

const ReplyPage = () => {
  const [replyMessage, setReplyMessage] = useState("");

  const handleSubmitReply = async (e) => {
    e.preventDefault();
    // Your code to submit the reply message
    // This is just a placeholder
    console.log("Reply submitted:", replyMessage);
  };

  return (
    <div className="reply-container">
      <div className="reply-message-img"></div>
      <div className="reply-wrapper">
        <h2>Reply to Enquiry</h2>
        <div className="enquiry-details">
          <h3>Course Name:</h3>
          <p>React Development</p>
          <h3>Email:</h3> <p>example@example.com</p>
          <h3>Enquiry Type:</h3> <p>Complaint</p>
          <h3>Message:</h3>
          <p>Lorem ipsum dolor sit amet...</p>
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
