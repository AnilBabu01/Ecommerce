import React, { useEffect, useState } from "react";
import "rc-slider/assets/index.css";
import Metadata from "../metadata/Metadata";
import Product from "../product/Product";
import Loader from "../loader/Loader";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getProducts } from "../actions/productActions";
import { loadUser } from "../actions/authActions";
import "./Home.css";

const Subhome = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [onstinegetuserinfo, setonstinegetuserinfo] = useState(true);

  const { keyword } = useParams();

  const { loading, products, error } = useSelector((state) => state.products);

  if (onstinegetuserinfo === true) {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loadUser());
      setonstinegetuserinfo(false);
    }
  }

  useEffect(() => {
    dispatch(getProducts(keyword));
    if (error) {
      alert.error(error);
    }
  }, [dispatch, error, alert, keyword]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title={"Buy best product by"} />

          <div>
            <h1 className="centertext" id="products_heading">
              Welcome To Nepalikart
            </h1>
          </div>

          <section id="products" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => {
                  return (
                    <>
                      <Product key={product._id} product={product} />
                    </>
                  );
                })}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Subhome;
