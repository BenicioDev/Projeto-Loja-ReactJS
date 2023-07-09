import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductsAPI from "../../ApiProducts/ProductsAPI";


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
        products.map((product) => <p key={product.title}>{product.title}</p>)
      }
    </section>
  );
}

export default Products;
