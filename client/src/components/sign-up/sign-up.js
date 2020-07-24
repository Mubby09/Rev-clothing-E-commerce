import React, { useState } from "react";
import "./sign-up.style.css";
import Button from "../button/button";
import {
  auth,
  createUserProfileDocument
} from "../../firebase/firebase-utilities";
import FormInput from "../form-input/form-input";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password, confirmPassword } = credentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      const div = document.createElement("div");
      div.className = `alert`;
      div.appendChild(document.createTextNode("Password must MATCH"));
      const container = document.querySelector(".sign-up-form");
      const before = document.querySelector("display-name");
      container.insertBefore(div, before);
      setTimeout(() => {
        div.remove();
      }, 2000);
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Fill the inputs below to open one</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label className="display-name">Display Name</label>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          required
          placeholder="Enter Display Name"
        />
        <label>Email</label>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
          placeholder="Enter Email"
        />
        <label>Password</label>
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
          placeholder="Enter Password"
        />
        <label>Confirm Password</label>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          required
          placeholder="Confirm Password"
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUp;
