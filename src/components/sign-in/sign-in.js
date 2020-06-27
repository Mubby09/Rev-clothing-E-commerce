import React from "react";
import FormInput from "../form-input/form-input";
import "./sign-in.style.css";
import Button from "../button/button";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>Already have an account?</h1>
        <span>sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            placeholder="Enter Email"
            handleChange={this.handleChange}
            required
            className="formInput"
          />
          <label>Password</label>
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Enter Password"
            handleChange={this.handleChange}
            required
            className="formInput"
          />
          <Button type="submit">Sign In</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
