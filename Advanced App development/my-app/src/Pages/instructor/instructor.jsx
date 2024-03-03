import React, { useEffect, useState } from "react";
import "/src/assets/Css/teacherPage.css";

const ExampleTable = () => {
  const [enquiryData, setEnquiryData] = useState([]);

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

  return (
    <div className="table-container">
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
                <button className="query-reply">Reply</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExampleTable;
