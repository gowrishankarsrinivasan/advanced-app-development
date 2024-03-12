import React, { useEffect, useState } from "react";
import "/src/assets/Css/StatusPage.css"; // Import your CSS file for styling
import { GetStatusByEmail } from "../../services/auth";

const EnquiryStatusPage = () => {
  const [enquiryData, setEnquiryData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await GetStatusByEmail("727722eucs508@skcet.ac.in");
      console.log(response.data);
      setEnquiryData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="enquiry-status-page">
      {enquiryData.length === 0 ? (
        <div className="status-img"></div>
      ) : (
        <div className="status-page-content">
          <h1 className="page-title">Check Status of Enquiry</h1>
          <div className="enquiry-list">
            {enquiryData.map((enquiry, index) => (
              <div key={index} className="enquiry-item">
                <div className="enquiry-info">
                  <div className="enquiry-email">{enquiry.email}</div>
                  <div
                    className="enquiry-reply"
                    style={{ color: enquiry.reply !== null ? "green" : "red" }}
                  >
                    {enquiry.reply !== null ? "Replied" : "Pending"}
                  </div>
                </div>
                <div className="enquiry-message">
                  <p>
                    <strong>Course Name:</strong> {enquiry.course_name}
                  </p>
                </div>
                <div className="enquiry-message">
                  <p>
                    <strong>Enquiry Type:</strong> {enquiry.enquiry_type}
                  </p>
                </div>
                <div className="enquiry-message">
                  <p>
                    <strong>Message:</strong> {enquiry.message}
                  </p>
                </div>
                <div className="enquiry-message">
                  <p>
                    <strong>Reply:</strong> {enquiry.reply}
                  </p>
                </div>
                <div
                  className={`enquiry-reply ${
                    enquiry.reply ? "replied" : "not-replied"
                  }`}
                >
                  {enquiry.reply !== null && enquiry.reply.trim() !== ""
                    ? "Replied"
                    : "Pending Reply"}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnquiryStatusPage;
