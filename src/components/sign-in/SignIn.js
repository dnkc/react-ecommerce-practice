import React, { Component } from "react";
import "./SignIn.style.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../customButton/CustomButton";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
    console.log("testing");
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={(e) => this.handleChange(e)}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={(e) => this.handleChange(e)}
            value={this.state.password}
            label="Password"
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
