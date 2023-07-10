import React, { useContext } from "react";
import "./CartPageApp.css";
import CartItemApp from "../CartItemApp/CartItemApp";
import ContxApplication from "../../context/ContxApplication";

function CartPageApp() {

  const { cartItems } = useContext(ContxApplication);

  return (  
    <section className="Cart">
      <div className="Cart-Items">
        {cartItems.map((cartItem) => <CartItemApp key={cartItem.id}  data={cartItem}  />)}

         
      </div>

      <div className="Cart-Total">Valor total</div>
    </section>
  );
}
 
export default CartPageApp;