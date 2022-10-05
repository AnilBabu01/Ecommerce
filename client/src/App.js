import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ProductDetails from "./components/product/ProductDetails";
import Profile from "./components/user/Profile";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ResetPassword from "./components/user/ResetPassword";
import NewPassword from "./components/user/NewPassword";
import Cart from "./components/cart/Cart";
import ShippingInfo from "./components/cart/ShippingInfo";
import Confirmorder from "./components/cart/Confirmorder";
import Payment from "./components/cart/Payment";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";
import "./App.css";
import { axios } from "axios";

const stripe = loadStripe(
  "pk_test_51LopskSGAjDSZQyBVlYz24jYhviKM94BLmSCmiimOAre20S8Ti9RD2CF8BPfAsofbNl1fdmQK2UxyFXSPvzS0Tmm00PM0lilLG"
);
function App() {
  useEffect(() => {}, []);

  return (
    <>
      <Elements stripe={stripe}>
        <BrowserRouter>
          <Header />
          <div className="container container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/search/:keyword" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/me" element={<Profile />} />
              <Route path="/me/update" element={<UpdateProfile />} />
              <Route path="/password/update" element={<UpdatePassword />} />
              <Route path="/password/forgot" element={<ResetPassword />} />
              <Route path="/password/reset/:token" element={<NewPassword />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shipping" element={<ShippingInfo />} />
              <Route path="/confirm" element={<Confirmorder />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/success" element={<PaymentSuccess />} />
              <Route path="/orders/me" element={<ListOrders />} />
              <Route path="/order/:id" element={<OrderDetails />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </Elements>
    </>
  );
}

export default App;
