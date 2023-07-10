import React, { useState } from "react";
import ContxApplication from "./ContxApplication";
import propTypes from "prop-types";

function Prov({children}) { /*Componente informacoes*/

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);



  const val = {
    products, 
    setProducts,
    cartItems, 
    setCartItems,
    isCartVisible,
    setIsCartVisible
  
  };


  return ( 
    <ContxApplication.Provider value={ val }>
      {children}
    </ContxApplication.Provider>
  );
}

export default Prov;

Prov.propTypes = {
  children: propTypes.any,
}.isRequired;