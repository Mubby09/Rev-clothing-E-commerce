import React from "react";

import "./form-input.style.css";

const FormInput = ({ handleChange, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
/* {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null} */
