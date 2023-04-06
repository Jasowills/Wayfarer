import React from "react";
import "../Dashboard.css"
function SearchForm() {
 

  return (
    <form >
      <div className="form-input remove">
        <input type="search" placeholder="Search..."  />
        <button type="submit" className="search-btn">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
