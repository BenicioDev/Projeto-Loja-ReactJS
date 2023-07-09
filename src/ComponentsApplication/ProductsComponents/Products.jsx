import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductsAPI from "../../ApiProducts/ProductsAPI";
import ProductCard from "../CardProductsApplication/ProductCard";


function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    ProductsAPI("guitarra").then((resposta) => {
      setProducts(resposta);
      
    });

  }, []);


  return (  
    <section className="products container">
      {
        products.map((product) =>
          <ProductCard key={product.id} 
            data={product} />)
      }
    </section>
  );
}

export default Products;
