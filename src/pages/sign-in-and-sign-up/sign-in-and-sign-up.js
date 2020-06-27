import React from "react";
import "./sign-in-and-sign-up.css";
import SignIn from "../../components/sign-in/sign-in";

class SignInSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="SignInSignUp">
        <SignIn />
      </div>
    );
  }
}

export default SignInSignUp;
