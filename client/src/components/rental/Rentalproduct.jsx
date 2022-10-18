import React from "react";
import { Link } from "react-router-dom";
const Rentalproduct = ({ product }) => {
  return (
    <>
      <div
        className="col-sm-12 col-md-6 col-lg-2"
        style={{ marginBottom: "1rem" }}
      >
        <div className="card p-2 rounded">
          <img
            alt="img"
            className="proimg"
            src={product.image ? product.image : ""}
          />

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              <Link to={`/product/${product._id}`}>
                {product && product.productname}
              </Link>
            </h5>

            <p className="card-text">₹{product && product.price}</p>
            <p className="card-text">status : {product && product.status}</p>
            <Link
              to={`/rentaldetails/${product._id}`}
              id="view_btn"
              className="btn btn-block"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rentalproduct;
