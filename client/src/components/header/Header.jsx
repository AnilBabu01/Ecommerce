import React, { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Search from "../search/Search";

const Header = ({ history }) => {
  return (
    <>
      <nav style={{ possition: "fixed" }} class="navbar row">
        <div class="col-12 col-md-3">
          <div class="navbar-brand">
            <h2 style={{ color: "#fa9c23" }}>Ab-coder</h2>
          </div>
        </div>

        <div class="col-12 col-md-6 mt-2 mt-md-0">
          <Search history={history} />
        </div>

        <div class="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to="/login" class="btn" id="login_btn">
            Login
          </Link>

          <span id="cart" class="ml-3">
            Cart
          </span>
          <span class="ml-1" id="cart_count">
            2
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
