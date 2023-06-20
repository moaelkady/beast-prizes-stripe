import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

import "./payment-form.styles.scss";

const defaultFormFields = {
  userName: "",
  userEmail: "",
  amount: 0,
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
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
          amount: amount ? amount : "no amount",
        },
      },
    });
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
        <button>Pay Now</button>
      </form>
    </div>
  );
};
export default PaymentForm;
