import React from "react";
import "./header.style.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase-utilities";

const Header = ({ currentUser }) => (
  <div>
    <div>
      <i className="fa fa-bars fa-2x"></i>
    </div>
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="shop">
          Shop
        </Link>
        <Link to="/shop">Contact</Link>
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
      <div className="small-screen">
        <ul>
          <li>
            <Link to="/shop" className="shop">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/shop">Contact</Link>
          </li>
          <li>
            {currentUser ? (
              <Link onClick={() => auth.signOut()} className="option">
                SIGN OUT
              </Link>
            ) : (
              <Link to="/signIn" className="option">
                SIGN IN
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
