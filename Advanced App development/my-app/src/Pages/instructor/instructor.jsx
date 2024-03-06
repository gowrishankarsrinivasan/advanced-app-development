import React, { useEffect, useState } from "react";
import "/src/assets/Css/teacherPage.css";
import emptyTableImage from "/src/assets/Images/instructorPageImgages/empty-table.jpg"; // Adjust the path to your image file
import { useNavigate } from "react-router-dom";
const ExampleTable = () => {
  const [enquiryData, setEnquiryData] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8181/enquiry/getAllEnquiry"
      );
      const data = await response.json();
      setEnquiryData(data);
      console.table(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReply = () => {
    nav("/bec.com/user/QueryReply");
  };

  return (
    <div className="table-container">
      {enquiryData.length === 0 ? (
        <div className="empty-table-image-container">
          <div className="empty-table-image-container-left"></div>
          <div className="empty-table-image-container-right">
            <h1>No Queries found</h1>
            <button className="goBack">Go Back</button>
          </div>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Course Name</th>
              <th>Email</th>
              <th>enquiry_type</th>
              <th>message</th>
              <th>Reply</th>
            </tr>
          </thead>
          <tbody>
            {enquiryData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.course_name}</td>
                <td>{item.email}</td>
                <td>{item.enquiry_type}</td>
                <td>{item.message}</td>
                <td style={{ padding: "0 30px" }}>
                  <button className="query-reply" onClick={handleReply}>
                    Reply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExampleTable;
