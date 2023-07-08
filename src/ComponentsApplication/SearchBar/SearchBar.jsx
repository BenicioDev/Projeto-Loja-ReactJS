import React, { useState} from "react";
import { GrFormSearch } from "react-icons/gr";
import "./SearchBar.css";

function SearchBar () {

  const [getValue, setValue] = useState("");




  return (      
    <form className="search-bar-main">
      <input 
        type="search-input"
        placeholder="Está procurando algo específico?" 
        className="search-input"
        onChange = {({target}) => setValue(target.value)}
        required
      />
      { getValue }
      <button type="submit" className="search-button">
        <GrFormSearch/>
      </button>
    </form>
  );
}

export default SearchBar ;