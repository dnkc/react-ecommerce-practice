import "./App.css";
import HomePage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndUp from "./pages/sign-in-and-sign-up/SignInAndUp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndUp />} />
      </Routes>
    </>
  );
}

export default App;
