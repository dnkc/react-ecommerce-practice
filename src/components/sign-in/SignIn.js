import React, { Component } from "react";
import "./SignIn.style.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../customButton/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/Firebase.utils";

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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email[0], password[0]);

      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error.message);
    }
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
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Google Sign In
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
