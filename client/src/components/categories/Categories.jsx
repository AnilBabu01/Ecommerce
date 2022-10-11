import React from "react";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Home from "../home/Home";
import Subhome from "../home/Subgome";
import Slideruse from "../slider/Silderuse";
import Product from "../product/Product";
import Metadata from "../metadata/Metadata";

import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import "./Categories.css";
import ComNavlink from "./ComNavlink";
const Categories = () => {
  const { loading, products, error, productsCount, resPerPage } = useSelector(
    (state) => state.products
  );

  console.log("from cate", products);
  return (
    <>
      <ComNavlink />

      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title={"Buy best product by"} />

          <div>
            <h1 className="latesttext " id="products_heading">
              ALL
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

export default Categories;
