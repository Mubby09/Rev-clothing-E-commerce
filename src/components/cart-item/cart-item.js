import React from "react";
import "./cart-item.css";

const CartItem = ({ item }) => (
  <div className="cart-item">
    <img src={item.imageUrl} alt="item" />
    <div className="item-details">
      <div className="name">{item.name}</div>
      <div className="price">
        <p>{item.quantity} </p> x <p>${item.price}</p>
      </div>
    </div>
  </div>
);

export default CartItem;
