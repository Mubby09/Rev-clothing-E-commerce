import React from "react";
import "./cart-item.css";
import { connect } from "react-redux";
import { clearItem } from "../../redux/cart/cart-action";

const CartItem = ({ item, clearItem }) => (
  <div className="cart-item">
    <img src={item.imageUrl} alt="item" />
    <div className="item-details">
      <div className="name">{item.name}</div>
      <div className="price">
        <p>{item.quantity} </p> x{" "}
        <p>
          ${item.price}
          <button title="remove item" onClick={() => clearItem(item)}>
            X
          </button>
        </p>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);
