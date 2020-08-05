import React from "react";
import "./new-homepage.css";
import Button from "../../components/button/button";

const NewHomepage = ({ history }) => {
  return (
    <div className="background">
      <div className="heading">
        <h1>SHOP WITH US TODAY AT REV-CLOTHINGS</h1>
        <Button onClick={() => history.push("/signIn")}>
          SIGN IN OR SIGN UP HERE
        </Button>
      </div>
    </div>
  );
};

export default NewHomepage;
