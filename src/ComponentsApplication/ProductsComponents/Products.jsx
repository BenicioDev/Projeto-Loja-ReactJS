import React, { useEffect, useContext } from "react";
import "./Products.css";
import ProductsAPI from "../../ApiProducts/ProductsAPI";
import ProductCard from "../CardProductsApplication/ProductCard";
import ContxApplication from "../../context/ContxApplication";


function Products() {

  const {products, setProducts} = useContext(ContxApplication);

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
