import React, { useContext } from "react";
import "./CartPageApp.css";
import CartItemApp from "../CartItemApp/CartItemApp";
import ContxApplication from "../../context/ContxApplication";

function CartPageApp() {

  const { cartItems } = useContext(ContxApplication);

  /*Soma total*/
  const TOTAL = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (  
    <section className="Cart">
      <div className="Cart-Items">
        {cartItems.map((cartItem) => <CartItemApp key={cartItem.id}  data={cartItem}  />)}  
      </div>

      <div className="Cart-Total">Total: R${TOTAL}</div>
    </section>
  );
}
 
export default CartPageApp;