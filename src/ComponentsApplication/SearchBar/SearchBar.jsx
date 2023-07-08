import React from "react";
import { GrFormSearch } from "react-icons/gr";
import "./SearchBar.css";

function SearchBar () {
  return (      
    <form className="search-bar-main">
      <input type="search-input"
        placeholder="Está procurando algo específico?" 
        className="search-input"
        required/>

      <button type="submit" className="search-button">
        <GrFormSearch/>
      </button>
    </form>
  );
}

export default SearchBar ;