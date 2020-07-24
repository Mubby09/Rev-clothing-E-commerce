import React from "react";
import "./checkout-item.css";
import { connect } from "react-redux";
import { clearItem, addItem, removeItem } from "../../redux/cart/cart-action";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        {/* <i className="fa fa-minus" onClick={() => removeItem(cartItem)}></i> */}
        {quantity}
        <i
          className="fa fa-plus"
          onClick={() => {
            addItem(cartItem);
          }}
        ></i>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
