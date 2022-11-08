import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
const Search = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const searchHandler = (e) => {
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <form onSubmit={searchHandler} className="mobileform">
        <div className="input-group mobileinputgruop">
          <input
            type="text"
            id="search_field"
            className="form-control  mobileform"
            placeholder="Enter Category"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <div className="input-group-append mobilesearchbtn">
            <button id="search_btn" className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
