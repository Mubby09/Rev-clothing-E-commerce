import React from "react";
import "./cart-icon-component.style.css";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-action";
import { selectCartItemCount } from "../../redux/cart/cart.selector";
// import{createStructuredSelector} from 'reselect'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state)
});

// OR YOU COULD DO WRITE THE CODE BELOW,
// IF YOU DECIDE TO USE THE createStructuredSelector FROM 'reselect' imported above.

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemCount
// });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
