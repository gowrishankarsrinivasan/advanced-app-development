import React, { useEffect, useState } from "react";
import "/src/assets/Css/teacherPage.css";
import emptyTableImage from "/src/assets/Images/instructorPageImgages/empty-table.jpg"; // Adjust the path to your image file
import { useNavigate } from "react-router-dom";
import { GetAllQuery } from "../../services/auth";
import { setEmail } from "../../Redux/Slices/queryDataSlice";
import { useDispatch } from "react-redux";
const ExampleTable = () => {
  const dispatch = useDispatch();
  const [enquiryData, setEnquiryData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await GetAllQuery();
      setEnquiryData(response.data); // Remove the function call ()
      // console.table(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReply = (email) => {
    dispatch(setEmail(email)); // Dispatch action to update email in Redux state
    // console.log(email);
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
            {enquiryData.map((item, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.course_name}</td>
                <td>{item.email}</td>
                <td>{item.enquiry_type}</td>
                <td>{item.message}</td>
                <td style={{ padding: "0 30px" }}>
                  <button
                    className="query-reply"
                    onClick={() => handleReply(item.email)}
                  >
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
