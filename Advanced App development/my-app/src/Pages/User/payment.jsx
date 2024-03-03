import "/src/assets/Css/payment.css";

function PaymentPage() {
  return (
    <div className="payment-wrapper">
      <div className="payment-left-container"></div>
      <div className="payment-right-container">
        <div className="payment-container">
          <h2 className="payment-container-header">Payment Details</h2>
          <div className="payment-form">
            <form className="payment-form">
              <div className="paypal">
                <p>paypal</p>
              </div>
              <div className="paypal">
                <p>Credit card</p>
              </div>
              <div className="payment-summaray">
                <h1>Summary</h1>
                <p>Course:</p>
                <p>price:</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Atque nihil neque quisquam aut repellendus, dicta vero? Animi
                  dicta cupiditate, facilis provident quibusdam ab quis, iste
                  harum ipsum hic, nemo qui!
                </p>
              </div>
              <label htmlFor="cardNumber">Card holder Name:</label>
              <input type="text" id="cardNumber" name="cardNumber" />

              <label htmlFor="expiryDate">Card number:</label>
              <input type="text" id="expiryDate" name="expiryDate" />
              <div className="form-split">
                <div className="form-split-column">
                  <label htmlFor="cvv">dd/MM/YY</label>
                  <input type="text" id="cvv" name="cvv" />
                </div>
                <div className="form-split-column">
                  <label htmlFor="cvv">CVV CCODE:</label>
                  <input type="text" id="cvv" name="cvv" />
                </div>
              </div>
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input type="text" id="expiryDate" name="expiryDate" />

              <button type="submit">Submit Payment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
