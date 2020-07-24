import React from "react";
import "./button.style.css";

const Button = ({ children, inverted, ...otherProps }) => (
  <button className={`${inverted ? "inverted" : ""}button`} {...otherProps}>
    {children}
  </button>
);

export default Button;
