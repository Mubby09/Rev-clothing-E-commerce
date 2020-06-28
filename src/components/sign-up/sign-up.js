import React from "react";
import "./sign-up.style.css";
import Button from "../button/button";
import {
  auth,
  createUserProfileDocument
} from "../../firebase/firebase-utilities";
import FormInput from "../form-input/form-input";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
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
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Fill the inputs below to open one</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <label className="display-name">Display Name</label>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            handleChange={this.handleChange}
            required
          />
          <label>Email</label>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <label>Password</label>
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <label>Confirm Password</label>
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <Button type="submit">SIGN UP</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
