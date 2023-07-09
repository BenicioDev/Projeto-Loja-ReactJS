import React from "react";
import propTypes from "prop-types";
import "./ProductCard.css";
import {LiaCartPlusSolid} from "react-icons/lia";


function ProductCard({data}) {

  const { title, thumbnail, price} = data;



  return ( 
    <section className='product-card'>

      <img src={thumbnail} 
        alt="product" className="img-card" />

      <div className="info-card">
        <h2 className="preco">R$ {price}</h2>
        <h2 className="titulo">{title}</h2>  {/* OBS */}
      </div>

      <button type="button" className="button-card-add">
        <LiaCartPlusSolid/>
      </button>

    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  propsData: propTypes.shape({})
}.isRequired;