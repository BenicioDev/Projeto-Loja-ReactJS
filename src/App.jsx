import React from "react";
import Header from "./ComponentsApplication/HeaderComponents/Header";
import Products from "./ComponentsApplication/ProductsComponents/Products";
import Prov from "./context/Prov";
import CartPageApp from "./ComponentsApplication/CartPageApp/CartPageApp";


function App() {
  return (
    <Prov>
      <Header />
      <Products />
      <CartPageApp/>
    </Prov>
  );
}

export default App;