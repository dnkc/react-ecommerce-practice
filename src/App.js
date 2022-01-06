import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndUp from "./pages/sign-in-and-sign-up/SignInAndUp";
import { auth, createUserProfileDocument } from "./firebase/Firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentuser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({
        currentUser: userAuth,
      });
    });
  }

  componentWillUnmount() {
    this.subscribeFromAuth();
  }
  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndUp />} />
        </Routes>
      </>
    );
  }
}

export default App;
