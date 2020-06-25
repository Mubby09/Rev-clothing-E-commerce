import React from "react";
import "./header.style.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="shop">
        Shop
      </Link>
      <Link to="/shop">Contact</Link>
    </div>
  </div>
);

export default Header;
