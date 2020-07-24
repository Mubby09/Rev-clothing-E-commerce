import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import "./sign-in.style.css";
import Button from "../button/button";
import { auth, SignInWithGoogle } from "../../firebase/firebase-utilities";

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const { email, password } = credentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({
        email: "",
        password: ""
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h1>Already have an account?</h1>
      <span>sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <FormInput
          name="email"
          type="email"
          value={email}
          placeholder="Enter Email"
          handleChange={handleChange}
          required
          className="formInput"
        />
        <label>Password</label>
        <FormInput
          name="password"
          type="password"
          value={password}
          placeholder="Enter Password"
          handleChange={handleChange}
          required
          className="formInput"
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button onClick={SignInWithGoogle}>sign in with google</Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
