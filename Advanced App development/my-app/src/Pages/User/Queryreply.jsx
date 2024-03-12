import React, { useState } from "react";
import "/src/assets/Css/Admincss/queryReply.css";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryPost } from "../../services/auth";
import { useSelector } from "react-redux";
import { QueryReply } from "../../services/auth";
const ReplyPage = () => {
  const [replyMessage, setReplyMessage] = useState("");
  const email = useSelector((state) => state.email.value);
  console.log(email);
  const handleSubmitReply = async (e) => {
    e.preventDefault();
    const data = {
      reply: replyMessage,
    };
    try {
      QueryReply(email, data).then((res) => {
        console.log(res.data);
        setReplyMessage("");
        toast.success("Message sent successfully");
      });
    } catch (error) {
      console.error(error);
    }
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
      <ToastContainer />
    </div>
  );
};

export default ReplyPage;
