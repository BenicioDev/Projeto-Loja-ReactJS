import React from "react";
import "./Cart.css";
import {BsCart} from "react-icons/bs";

function Cart() {
  return ( 
    <button className="cart-main">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"></svg>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
      <BsCart></BsCart>
    </button>
  );
}

export default Cart;
