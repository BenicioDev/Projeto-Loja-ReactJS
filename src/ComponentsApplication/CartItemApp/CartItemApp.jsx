import React, { useContext } from "react";
import propTypes from "prop-types";
import { BsCartDashFill } from "react-icons/bs";
import "./CartItemApp.css";
import ContxApplication from "../../context/ContxApplication";

function CartItemApp({data}) {

  const {cartItems, setCartItems} = useContext(ContxApplication);

  const {id, thumbnail, title, price} = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };


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
          className="button-remove"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill/>
        </button>
      </div>  
    </section>
  );
}

export default CartItemApp;

CartItemApp.propTypes = {data: propTypes.object}.isRequired;