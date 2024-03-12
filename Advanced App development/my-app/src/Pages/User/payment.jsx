import React, { useEffect } from "react";
import "/src/assets/Css/payment.css";

function PaymentPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async () => {
    const options = {
      key: "rzp_test_RJ2efv7ySjDwOt",
      key_secret: "4UOWthvVZfECxv9leUzlK1EC",
      amount: 1000 * 100,
      currency: "INR",
      name: "BEC",
      prefill: {
        name: "Shankar bhai",
        email: "shankar@gmail.com",
        contact: "1234567890",
      },
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      notes: {
        address: "Razorpay cooperate office",
      },
      theme: {
        color: "#000000",
      },
    };

    const pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="payment-wrapper">
      <div className="payment-content">
        <h1 className="payment-title">Complete your Payment</h1>
        <p className="payment-description">
          Thank you for choosing our services! We appreciate your business.
          Please proceed to complete your payment to finalize your purchase.
        </p>
        <p className="payment-note">
          Note: Your payment details are securely processed by our trusted
          payment gateway provider.
        </p>
      </div>
      <div className="pay-container">
        <button className="btn btn-payment" onClick={handleSubmit}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;