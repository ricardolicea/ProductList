import CartItem from "./CartItem";
import carbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import ConfirmOrderContext from "../store/ConfirmOrderContext";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const confirmCtx = useContext(ConfirmOrderContext)

  function calculateTotal(){
    var total = 0.0
    cartCtx.desserts.forEach((item) => {
      const subtotal = item.dessert.price * item.quantity;
      total += subtotal;
    })
    return total
  }
  const total = calculateTotal();

  function handleShowCheckout(){
    confirmCtx.showCheckout()
  }
 
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cartList">
        <ul>

          {cartCtx.desserts.map((dessert) => (
            <CartItem key={dessert.dessert.name} dessert={dessert} />
          ))}

          <hr />
        </ul>
      </div>
      <div id="totalInfo">
        <span>Order Total</span>
        <h2 id="totalPrice">{currencyFormatter.format(total)}</h2>
      </div>

      <div id="carbonNeutral">
        <img src={carbonNeutral} className="logos" />
        <p id="legend">This is a carbon-neutral delivery</p>
      </div>

      <button id="confirmOrder" onClick={handleShowCheckout}>Confirm Order</button>
    </div>
  );
}
