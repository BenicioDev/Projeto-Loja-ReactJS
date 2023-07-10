import React from "react";
import propTypes from "prop-types";
import { BsCartDashFill } from "react-icons/bs";
import "./CartItemApp.css";

function CartItemApp({data}) {

  const {thumbnail, title, price} = data;


  return (  
    <section className="cart-item">
      <img src={thumbnail}
        alt="" 
        className="cart-item-image" />


      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{price.toLocaleString("pt-br",{style: "currency",currency: "BRL"})}</h3>

        <button 
          type="button"
          className="button-remove">
          <BsCartDashFill/>
        </button>
      </div>  
    </section>
  );
}

export default CartItemApp;

CartItemApp.propTypes = {data: propTypes.object}.isRequired;