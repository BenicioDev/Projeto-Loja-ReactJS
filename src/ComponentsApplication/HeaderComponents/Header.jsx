import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

function Header(){
  return(
    <header className="header">
      <div className="container">
        <SearchBar/>
        <button>Carrinho</button>
      </div>
    </header>
  );
}

export default Header;