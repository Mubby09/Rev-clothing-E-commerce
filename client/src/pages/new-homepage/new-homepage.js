import React from "react";
import "./new-homepage.css";
import Button from "../../components/button/button";

const NewHomepage = ({ history }) => (
  <div className="background">
    <div className="heading">
      <h1>SHOP WITH US TODAY AT REV-CLOTHINGS</h1>
      <Button onClick={() => history.push("/shop")}>START SHOPPING</Button>
    </div>
  </div>
);

export default NewHomepage;
