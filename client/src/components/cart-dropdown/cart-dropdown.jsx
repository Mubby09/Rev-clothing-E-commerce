import React from "react";
import "./cart-dropdown.css";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart-action";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems < 1 ? (
        <div className="no-items">NO ITEMS SELECTED YET</div>
      ) : (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      )}
    </div>
    <Button
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
      disabled={!cartItems.length}
    >
      GOT TO CHECKOUT
    </Button>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
