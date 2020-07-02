import React from "react";
import "./collection-item.style.css";
import Button from "../button/button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-action";

const CollectionItem = ({ item, addItem }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    />

    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="price">${item.price}</span>
    </div>
    <Button onClick={() => addItem(item)}>ADD TO CART</Button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
