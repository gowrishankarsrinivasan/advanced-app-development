import React, { useEffect, useState } from "react";
import "/src/assets/Css/Admincss/paymentDisplay.css";
import { paymentDetails } from "../../services/auth";
import imageSrc from "/src/assets/Images/avt.jpg"; // Import your image file
const PaymentList = () => {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    try {
      await fetch("http://localhost:8181/api/v1/auth/get")
        .then((response) => response.json())
        .then((data) => setUser(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pay-wrapper">
      <h1 className="pay-header">Payment details</h1>
      <div className="payment-list">
        {user.map((payment, index) => (
          <div key={payment.id} className="payment-item">
            <div className="payment-id">
              <img src={imageSrc} />
              <p>{payment.paymentid}</p>
            </div>
            <div className="email">{payment.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentList;
