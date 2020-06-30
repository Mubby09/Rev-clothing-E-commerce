import React from "react";
import "./sign-in-and-sign-up.css";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

function SignInSignUp() {
  return (
    <div className="SignInSignUp">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInSignUp;
