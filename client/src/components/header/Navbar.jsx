import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { logout } from "../actions/authActions";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import Search from "../search/Search";
import logo from "../Images/logo.png";
const Navbar = ({ history }) => {
  const [isMobile, setisMobile] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const { user, loading, isAuthenticated } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  console.log(location.pathname);
  const token = localStorage.getItem("token");

  console.log("toekn from nav", token);
  useEffect(() => {}, [isMobile, token]);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
  return (
    <>
      <nav className={style.navbar}>
        <img style={{ width: "200px", height: "50px" }} src={logo} alt="logo" />
        <div className={style.hideserch}>
          <Search history={history} />
        </div>

        <ul className={isMobile ? style.mobilelinks : style.navlinks}>
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
          {user && user.role === "user" && (
            <li>
              <NavLink
                onClick={() => setisMobile(false)}
                to="/cart"
                state={{ textDecoration: "none" }}
              >
                <span id="cart">Cart</span>
                <span
                  class="ml-1"
                  id="cart_count"
                  style={{ marginRight: "20px" }}
                >
                  {cartItems.length}
                </span>
              </NavLink>
            </li>
          )}
          <div className={style.hideserchin}>
            {user && user.role === "admin" && (
              <span id="cart" class="ml-3">
                Admin
              </span>
            )}
          </div>
          {localStorage.getItem("token") ? (
            <>
              {user && user.role === "admin" && (
                <li onClick={() => setisMobile(false)}>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? style.active : style.login
                    }
                  >
                    Dashboard
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

              {isAuthenticated ? (
                <div className="ml-4 dropdown d-inline">
                  <Link
                    to="#"
                    type="button"
                    id="dropDownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <figure className="avatar avatar-nav">
                      <img
                        src={user && user.avatar}
                        alt={user && user.name}
                        className="rounded-circle"
                      />
                    </figure>
                  </Link>

                  <div
                    className="dropdown-menu modifymenu"
                    aria-labelledby="dropDownMenuButton"
                  >
                    {user && user.role === "admin" && (
                      <Link className="dropdown-item" to="/dashboard">
                        Dashboard
                      </Link>
                    )}
                    <Link className="dropdown-item" to="/orders/me">
                      Orders
                    </Link>
                    <Link className="dropdown-item" to="/me">
                      Profile
                    </Link>
                    <Link className="dropdown-item" to="/">
                      home
                    </Link>
                    <Link
                      className="dropdown-item text-danger"
                      to="/"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              ) : (
                !loading && (
                  <Link to="/login" className="btn ml-4" id="login_btn">
                    Login
                  </Link>
                )
              )}
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
          )}{" "}
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
