import { useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import ProductDetails from "./components/product/ProductDetails";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { loadUser } from "./components/actions/authActions";
import { useSelector } from "react-redux";
import store from "./store";

function App() {
  useEffect(() => {
    store.dispatch(loadUser);
  }, []);
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  console.log("hello", user);
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
