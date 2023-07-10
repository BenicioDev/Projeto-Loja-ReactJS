import React, {  useContext } from "react";
import propTypes from "prop-types";
import "./ProductCard.css";
import ContxApplication from "../../context/ContxApplication";
import {LiaCartPlusSolid} from "react-icons/lia";


function ProductCard({data}) {

  const { title, thumbnail, price} = data;

  const {cartItems, setCartItems} = useContext(ContxApplication);

  const addCart = () =>{
    setCartItems([ ... cartItems, data]);
  };

  return ( 
    <section className='product-card'>

      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}  
        alt="product" className="img-card" />

      <div className="info-card">
        <h2 className="preco">{price.toLocaleString("pt-br",{style: "currency",currency: "BRL"})}</h2>
        <h2 className="titulo">{title}</h2>  {/* OBS */}
      </div>

      <button type="button" className="button-card-add" onClick={addCart}>
        <LiaCartPlusSolid/>
      </button>

    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  propsData: propTypes.shape({})
}.isRequired;