import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { logout } from "../actions/authActions";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import Search from "../search/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAlert } from "react-alert";
import logo from "../Images/logo.png";
const Navbar = ({ history }) => {
  const navigate = useNavigate();
  const [isMobile, setisMobile] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { user, loading, isAuthenticated } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  console.log(location.pathname);
  const token = localStorage.getItem("token");

  console.log("toekn from nav", token);
  useEffect(() => {}, [isMobile, token]);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    alert.success("you have logout successfully");
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <nav className={style.navbar}>
        <img style={{ width: "200px", height: "50px" }} src={logo} alt="logo" />
        <div className={style.hideserch}>
          <Search history={history} />
        </div>

        <ul className={isMobile ? style.mobilelinks : style.navlinks}>
          <li className={style.cartstyle}>
            <p>Shipping Service</p>
          </li>
          <li onClick={() => setisMobile(false)}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? style.active : style.home
              }
            >
              Home
            </NavLink>
          </li>
          <li onClick={() => setisMobile(false)}>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive ? style.active : style.home
              }
            >
              Categories
            </NavLink>
          </li>
          <li onClick={() => setisMobile(false)}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? style.active : style.about
              }
            >
              About us
            </NavLink>
          </li>
          <li className={style.cartstyle}>
            {user && user.role === "user" && (
              <NavLink
                onClick={() => setisMobile(false)}
                to="/cart"
                state={{ textDecoration: "none" }}
              >
                <span id="cart">Cart</span>
                <span id="cart_count">{cartItems.length}</span>
              </NavLink>
            )}
          </li>
          {localStorage.getItem("token") ? (
            <>
              {user && user.role === "admin" && (
                <li
                  className={style.cartstyle}
                  onClick={() => setisMobile(false)}
                >
                  <NavLink to="/dashboard">
                    <Tooltip title="Deshbord">
                      <DashboardIcon />
                    </Tooltip>
                  </NavLink>
                </li>
              )}
              {user && user.role === "user" && (
                <li onClick={() => setisMobile(false)}>
                  <NavLink
                    to="/orders/me"
                    className={({ isActive }) =>
                      isActive ? style.active : style.login
                    }
                  >
                    My Orders
                  </NavLink>
                </li>
              )}
            </>
          ) : (
            <></>
          )}{" "}
          {isAuthenticated && user ? (
            <>
              <li onClick={() => setisMobile(false)}>
                <NavLink to="" onClick={logoutHandler} className={style.about}>
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li onClick={() => setisMobile(false)}>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? style.active : style.login
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
          <div className={style.hideserchin}>
            <Search history={history} />
          </div>
        </ul>
        <i
          style={{ marginRight: "20px" }}
          onClick={() => setisMobile(!isMobile)}
          className={style.mobileMenuIcon}
        >
          {isMobile ? (
            <>
              <CloseIcon style={{ height: "40px" }} className={style.burger} />
            </>
          ) : (
            <>
              <MenuIcon style={{ height: "40px" }} className={style.burger} />
            </>
          )}
        </i>
      </nav>
    </>
  );
};

export default Navbar;
