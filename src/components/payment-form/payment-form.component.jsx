import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

import "./payment-form.styles.scss";

const defaultFormFields = {
  userName: "",
  userEmail: "",
  amount: "",
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, userEmail, amount } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: userName ? userName : "Not typed",
          email: userEmail ? userEmail : "Not typed",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      resetFormFields();
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
      }
    }
  };

  return (
    <div className="payment-form-container">
      <form className="form-container" onSubmit={paymentHandler}>
        <div className="personal-info">
          <input
            type="text"
            name="userName"
            placeholder="Enter Your Name"
            value={userName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="userEmail"
            placeholder="Enter Your Email"
            value={userEmail}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            min="1"
            max="999999"
            name="amount"
            placeholder="Enter The Amount in just numbers: 5, 10, 15, 20"
            value={amount}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <CardElement />
        <br />
        <button className={isProcessingPayment ? "btn-loading" : ""}>
          <span className="btn-loader"></span>
          <span className="btn-name">Pay Now</span>
        </button>
      </form>
    </div>
  );
};
export default PaymentForm;
