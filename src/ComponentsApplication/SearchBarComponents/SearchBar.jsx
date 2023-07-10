import React, { useState, useContext} from "react";
import { GrFormSearch } from "react-icons/gr";
import "./SearchBar.css";
import ProductsAPI from "../../ApiProducts/ProductsAPI";
import ContxApplication from "../../context/ContxApplication";

function SearchBar () {

  const [getValue, setValue] = useState("");

  const { setProducts } = useContext(ContxApplication);

  const BuscaSB = async (event) => {
    event.preventDefault();

    const Prod = await ProductsAPI(getValue); /* Array de produtos */
    setProducts(Prod);
  
  };


  return (      
    <form className="search-bar-main" onSubmit={BuscaSB}>
      <input 
        type="search-input"
        placeholder="Está procurando algo específico?" 
        className="search-input"
        onChange = {({target}) => setValue(target.value)}
        value={getValue}
        required
      />
      <button type="submit" className="search-button">
        <GrFormSearch/>
      </button>
    </form>
  );
}

export default SearchBar ;