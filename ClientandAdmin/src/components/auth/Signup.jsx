import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Metadata from "../metadata/Metadata";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { register, clearErrors } from "../actions/authActions";
import Loader from "../loader/Loader";
import axios from "axios";
const Signup = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [showprocess, setshowprocess] = useState(false);
  const navigate = useNavigate();
  const {
    loading,
    error,
    isAuthenticated,
    isRegisterGoLogin,
    data,
    isNotAuth,
  } = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isRegisterGoLogin) {
      setshowprocess(false);
      console.log(data);
      alert.success("You have Register Successfully");
      navigate("/login");
    }
    if (isNotAuth) {
      setshowprocess(false);
      alert.error("Sorry a user with this email already exists");
    }
  }, [dispatch, alert, isAuthenticated, error, isRegisterGoLogin]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setshowprocess(true);
    const data = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(register(data));
  };
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      {loading ? (
        Loader
      ) : (
        <>
          <Metadata title={"Register"} />

          <div className="row wrapper loginMoble">
            <div className="col-10 col-lg-5">
              <form
                onSubmit={submitHandler}
                className="shadow-lg"
                encType="multipart/form-data"
              >
                <h1 className="mb-3">Register</h1>

                <div className="form-group">
                  <label htmlFor="name_field">Name</label>
                  <input
                    type="name"
                    id="name_field"
                    className="form-control"
                    value={name}
                    name="name"
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email_field">Email</label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    value={email}
                    name="email"
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password_field">Password</label>
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    value={password}
                    name="password"
                    onChange={onChange}
                  />
                </div>

                <button
                  id="register_button"
                  type="submit"
                  className="btn btn-block py-3"
                  disabled={email && password && email ? false : true}
                >
                  {showprocess ? (
                    <CircularProgress className="procress" />
                  ) : (
                    "REGISTER"
                  )}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Signup;
