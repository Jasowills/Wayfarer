import React from "react";
import "../Dashboard.css"
function SearchForm() {
  const handleSearchClick = () => {
  };

  return (
    <form action="#">
      <div className="form-input remove">
        <input type="search" placeholder="Search..." onClick={handleSearchClick} />
        <button type="submit" className="search-btn">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
