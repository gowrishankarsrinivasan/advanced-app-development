import React, { useEffect, useState } from "react";
import axios from "axios";
import "/src/assets/Css/Admincss/enrolled.css";

const UserInfo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8181/api/v1/auth/course"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  localStorage.setItem("enrolled", data.length);

  return (
    <div className="enrolled">
      <div className="user-info-container">
        {data.map((user) => (
          <div key={user.id} className="card">
            <div className="card-header">
              <h2>Course: {user.course}</h2>
            </div>
            <div className="card-body">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Amount:</strong> {user.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
