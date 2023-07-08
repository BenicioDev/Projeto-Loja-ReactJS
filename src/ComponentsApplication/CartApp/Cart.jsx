import React from "react";
import "./Cart.css";
import {MdOutlineShoppingCart} from "react-icons/md";

function Cart() {
  return ( 
    <button type="button" className="cart-main">
      <MdOutlineShoppingCart className="icon-cart"></MdOutlineShoppingCart>
      <span className="cart-itens">2</span>
    </button>
  );
}

export default Cart;
