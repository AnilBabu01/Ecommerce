import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { logout } from "../actions/authActions";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import Search from "../search/Search";
import { useAlert } from "react-alert";
import logo from "../Images/logo.png";
const Navbar = ({ history }) => {
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
  };

  return (
    <>
      <nav className={style.navbar}>
        <Link to="/">
          <img
            style={{ width: "200px", height: "50px" }}
            src={logo}
            alt="logo"
          />
        </Link>

        <div className={style.hideserch}>
          <Search history={history} />
        </div>

        <ul className={isMobile ? style.mobilelinks : style.navlinks}>
          <li onClick={() => setisMobile(false)}>
            <NavLink
              to="/shipping"
              className={({ isActive }) =>
                isActive ? style.active : style.home
              }
            >
              Shipping Service
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
          <li className="cartlist">
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

          <div className={style.homeiconhide}>
            <div className="ml-4 dropdown d-inline  homeiconhide">
              <Link
                className={({ isActive }) =>
                  isActive ? style.active : style.login
                }
                to="#"
                type="button"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <HomeIcon />
                </figure>
              </Link>

              <div
                className="dropdown-menu modifymenu"
                aria-labelledby="dropDownMenuButton"
              >
                <p className="dropdown-item">user name</p>
                {user && user.role === "admin" && (
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                )}
                {user && user.role === "user" && (
                  <Link className="dropdown-item" to="/orders/me">
                    Orders
                  </Link>
                )}

                <Link className="dropdown-item" to="/me">
                  Profile
                </Link>
                <Link className="dropdown-item" to="/about">
                  About Us
                </Link>
                <Link className="dropdown-item" to="/contact">
                  Contact Us
                </Link>
                <Link className="dropdown-item" to="/shipping">
                  Shipping service
                </Link>

                {isAuthenticated ? (
                  <Link
                    className="dropdown-item text-danger"
                    to="/"
                    onClick={logoutHandler}
                  >
                    Logout
                  </Link>
                ) : (
                  !loading && (
                    <Link to="/login" className="btn ml-4" id="login_btn">
                      Login
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          <div className={style.hideinlapto}>
            {user && user.role === "admin" && (
              <li onClick={() => setisMobile(false)}>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? style.active : style.home
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}
            {user && user.role === "user" && (
              <Link className="dropdown-item" to="/orders/me">
                Orders
              </Link>
            )}
            <li onClick={() => setisMobile(false)}>
              <NavLink
                to="/me"
                className={({ isActive }) =>
                  isActive ? style.active : style.home
                }
              >
                Profile
              </NavLink>
            </li>

            <li onClick={() => setisMobile(false)}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? style.active : style.home
                }
              >
                about
              </NavLink>
            </li>
            <li onClick={() => setisMobile(false)}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? style.active : style.home
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li onClick={() => setisMobile(false)}>
              <NavLink
                to="/shipping"
                className={({ isActive }) =>
                  isActive ? style.active : style.home
                }
              >
                Shipping service
              </NavLink>
            </li>

            {isAuthenticated ? (
              <>
                <li onClick={() => setisMobile(false)}>
                  <NavLink
                    to="/"
                    onClick={logoutHandler}
                    className={({ isActive }) =>
                      isActive ? style.active : style.home
                    }
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              !loading && (
                <>
                  <li onClick={() => setisMobile(false)}>
                    <NavLink
                      to="//login"
                      className={({ isActive }) =>
                        isActive ? style.active : style.home
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )
            )}
          </div>
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
