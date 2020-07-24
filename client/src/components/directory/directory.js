import React from "react";
import "./directory.style.css";
import MenuItem from "../menu-item/menu";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useDirectory } from "../../redux/directory/directory.selector";

// function randomNumber() {
//   return Math.floor(Math.random() * 1000 + 1);
// }

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: useDirectory
});

export default connect(mapStateToProps)(Directory);
