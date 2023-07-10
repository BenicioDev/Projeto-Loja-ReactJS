import React, { useContext } from "react";
import "./Cart.css";
import {MdOutlineShoppingCart} from "react-icons/md";
import ContxApplication from "../../context/ContxApplication";

function Cart() {

  const {cartItems, isCartVisible, setIsCartVisible} = useContext(ContxApplication);

  return ( 
    <button 
      type="button" 
      className="cart-main"
      onClick={()=> setIsCartVisible(!isCartVisible)}
    >
      <MdOutlineShoppingCart className="icon-cart"></MdOutlineShoppingCart>
      <span className="cart-itens">{cartItems.length}</span>
    </button>
  );
}

export default Cart;
