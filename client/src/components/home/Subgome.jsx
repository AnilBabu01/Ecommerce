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

  const [price, setPrice] = useState([1, 1000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);

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
    dispatch(getProducts(keyword, price, category, rating));
  }, [dispatch, error, alert, keyword, price, category, rating]);

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
