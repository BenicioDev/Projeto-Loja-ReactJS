import React from "react";
import SearchBar from "../SearchBarComponents/SearchBar";
import "./Header.css";
import Cart from "../CartApp/Cart";

function Header(){
  return(
    <header className="header">
      <div className="container">
        <SearchBar/>
        <Cart/>


      </div>
    </header>
  );
}

export default Header;