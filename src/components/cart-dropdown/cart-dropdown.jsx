import React from "react";
import "./cart-dropdown.css";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>GOT TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropdown);
