import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <div className="search-field">
        <label className="text-label">
          <p>Input Field</p>
          <div className="search-container">
            <input type="text" className="search-input"/>
            <button className="search-btn">Search</button>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Search;
