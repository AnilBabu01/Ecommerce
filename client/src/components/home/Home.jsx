import React, { useEffect, useState } from "react";
import axios from "axios";
import "rc-slider/assets/index.css";
import Sliderhome from "./Silderhome";
import Metadata from "../metadata/Metadata";
import Product from "../product/Product";
import Loader from "../loader/Loader";
import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getProducts, clearErrors } from "../actions/productActions";
import Slideruse from "../slider/Silderuse";
import { loadUser } from "../actions/authActions";
import Navbar from "../header/Navbar";
import "./Home.css";

const Home = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [onstinegetuserinfo, setonstinegetuserinfo] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [imagess, setimagess] = useState("");
  const { keyword } = useParams();
  const [electronic, setelectronic] = useState([]);
  const [mobile, setmobile] = useState([]);
  const [accessories, setaccessories] = useState([]);
  const [clothing, setclothing] = useState([]);
  const [lewellery, setlewellery] = useState([]);
  const categories = [
    "Electronics",
    "Cameras",
    "Laptops",
    "Accessories",
    "Headphones",
    "Food",
    "Books",
    "Clothes/Shoes",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Home",
  ];

  const { loading, products, error, productsCount, resPerPage } = useSelector(
    (state) => state.products
  );

  if (onstinegetuserinfo === true) {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loadUser());
      setonstinegetuserinfo(false);
    }
  }

  const getsilderimg = async () => {
    axios.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = await axios.get(
      `${process.env.REACT_APP_URL}/api/admin/getslider`,

      config
    );

    console.log("img data from home", data.data.images);

    setimagess(data.data.images);
  };
  useEffect(() => {
    getproduct();
    getsilderimg();
    getproductAccessories();
    getproductmobile();
    getproductcloth();
    getprodutlewellery();
    dispatch(getProducts(keyword, currentPage, price, category, rating));
  }, [dispatch, error, alert, currentPage, keyword, price, category, rating]);

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onchancge = (e) => {
    setCategory(e.target.value);
  };

  const getproduct = async () => {
    axios.defaults.headers.get[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/api/product/getAllProduct?category=Electronic Device`
    );

    console.log("drom category", data.products);
    setelectronic(data.products);
  };

  const getproductAccessories = async () => {
    axios.defaults.headers.get[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/api/product/getAllProduct?category=Accessories`
    );

    console.log("accesso", data.products);
    setaccessories(data.products);
  };
  const getproductmobile = async () => {
    axios.defaults.headers.get[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/api/product/getAllProduct?category=Mobile`
    );

    console.log("accesso", data.products);
    setmobile(data.products);
  };

  const getproductcloth = async () => {
    axios.defaults.headers.get[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    const { data } = await axios.get(
      `http://localhost:8080/api/product/getAllProduct?category=Clothing`
    );

    console.log("accesso", data.products);
    setclothing(data.products);
  };

  const getprodutlewellery = async () => {
    axios.defaults.headers.get[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/api/product/getAllProduct?category=Jewellery`
    );

    console.log("accesso", data.products);
    setlewellery(data.products);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title={"Buy best product by"} />
          <Slideruse image={imagess} />
          <div>
            <h1 className="latesttext " id="products_heading">
              Electronic Device
            </h1>
          </div>

          <section id="products" className="container mt-5">
            <div className="row">
              {electronic &&
                electronic.map((product) => {
                  return (
                    <>
                      <Product key={product._id} product={product} />
                    </>
                  );
                })}
            </div>
          </section>

          <div>
            <h1 className="latesttext " id="products_heading">
              Accessories
            </h1>
          </div>

          <section id="products" className="container mt-5">
            <div className="row">
              {accessories &&
                accessories.map((product) => {
                  return (
                    <>
                      <Product key={product._id} product={product} />
                    </>
                  );
                })}
            </div>
          </section>

          <div>
            <h1 className="latesttext " id="products_heading">
              Mobile
            </h1>
          </div>

          <section id="products" className="container mt-5">
            <div className="row">
              {mobile &&
                mobile.map((product) => {
                  return (
                    <>
                      <Product key={product._id} product={product} />
                    </>
                  );
                })}
            </div>
          </section>

          <div>
            <h1 className="latesttext " id="products_heading">
              Clothing
            </h1>
          </div>

          <section id="products" className="container mt-5">
            <div className="row">
              {clothing &&
                clothing.map((product) => {
                  return (
                    <>
                      <Product key={product._id} product={product} />
                    </>
                  );
                })}
            </div>
          </section>

          <div>
            <h1 className="latesttext " id="products_heading">
              Jewellery
            </h1>
          </div>

          <section id="products" className="container mt-5">
            <div className="row">
              {lewellery &&
                lewellery.map((product) => {
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

export default Home;
