import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe.style.css";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H3rz5JovvwLbpaMDqVz6o3cHqXRoaF0dj4rmsy3esCf0vANGsywcWNWT7KfW3W0q6tSm39oHjUBipyDu1kNMVNd00j7BJsXYL";

  const onTokenSubmit = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((err) => {
        console.log("Payment Error");
        alert(
          "An error  occured with your payment, Please ensure to use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      className="stripe"
      label="PAY NOW"
      name="Rev-Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="PAY NOW"
      token={onTokenSubmit}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
