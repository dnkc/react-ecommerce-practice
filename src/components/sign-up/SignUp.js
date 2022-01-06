import React, { Component } from "react";

import "./SignUp.style.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../customButton/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/Firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password[0] !== confirmPassword[0]) {
      alert("Passwords do not match");
      return;
    } else {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email[0],
          password[0]
        );

        await createUserProfileDocument(user, { displayName });

        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            onChange={(e) => this.handleChange(e)}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={(e) => this.handleChange(e)}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
