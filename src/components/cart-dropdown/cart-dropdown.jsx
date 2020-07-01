import React from "react";
import "./cart-dropdown.css";
import Button from "../button/button";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <Button>GOT TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
