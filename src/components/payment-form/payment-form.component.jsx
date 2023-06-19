import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import "./payment-form.styles.scss";

const defaultFormFields = {
  userName: "",
  userEmail: "",
  amount: 0,
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { userName, userEmail, amount } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
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
          name: userName,
          email: userEmail,
          amount: amount,
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        resetFormFields();
        alert("Payment Successful!");
      }
    }
  };

  return (
    <div className="">
      <form onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={userName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={userEmail}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Enter Ticket price 5, 10, 15, 20 or any"
          value={amount}
          onChange={handleChange}
        />
        <CardElement />
        <Button isLoading={isProcessingPayment}>Pay Now</Button>
      </form>
    </div>
  );
};
export default PaymentForm;
