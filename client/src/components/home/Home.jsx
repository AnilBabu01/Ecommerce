import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import Metadata from "../metadata/Metadata";
import Product from "../product/Product";
import Loader from "../loader/Loader";

import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getProducts, clearErrors } from "../actions/productActions";

const { createSliderWithTooltip } = Slider;

const Home = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const { keyword } = useParams();

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

  useEffect(() => {
    dispatch(getProducts(keyword, currentPage, price, category));
    if (error) {
      return alert.error(error);
      dispatch(clearErrors);
    }
  }, [dispatch, error, alert, currentPage, keyword, price, category]);

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onchancge=(e)=>{
    setCategory(e.target.value)
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title={"Buy best product by"} />
          <h1 id="products_heading">Latest Products</h1>
          {keyword ? (
            <>
              <hr className="my-5" />

              <div className="mt-5">
                <h4 className="mb-3">Categories</h4>
                <select id="cars" onChange={onchancge}>
                  {categories.map((category) => (
                    <option
                    
                    
                      value={category}
                      name={category}
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ) : (
            ""
          )}
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
      {resPerPage <= productsCount && (
        <div className="d-flex justify-content-center mt-5">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </>
  );
};

export default Home;
