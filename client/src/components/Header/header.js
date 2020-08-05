import React from "react";
import "./header.style.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase-utilities";
import { connect } from "react-redux"; //'connect' is used to connect the 'ropor-reducer to the 'header' component here.
import CartIcon from "../cart-icon-component/cart-icon-component";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      REV <Logo className="logo" />
      CLOTHINGS
    </Link>
    <div className="options">
      {currentUser ? (
        <div>
          {" "}
          <Link to="/shop" className="shop">
            Shop
          </Link>
        </div>
      ) : (
        ""
      )}

      <div>
        {currentUser ? (
          <Link to="/" onClick={() => auth.signOut()} className="option">
            SIGN OUT
          </Link>
        ) : (
          <Link to="/signIn" className="option">
            SIGN IN
          </Link>
        )}
      </div>

      <div>
        <CartIcon />
      </div>
      {hidden ? "" : <CartDropdown />}
    </div>
  </div>
);

//We use state as the parameter here because we are trying to get the state of the user from the root reducer.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
