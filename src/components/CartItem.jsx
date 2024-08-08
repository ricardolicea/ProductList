import deleteImg from "../assets/images/icon-remove-item.svg";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";

export default function CartItem({ dessert }) {
  const cartCtx = useContext(CartContext);
  return (
    <li>
      <div className="cartItem">
        <div className="item">
          <h3>{dessert.dessert.name}</h3>
          <div className="priceInfo">
            <p className="quantity">{dessert.quantity}x</p>
            <p className="unitPrice">@ {currencyFormatter.format(dessert.dessert.price)}</p>
            <p className="total">
              {" "}
              {currencyFormatter.format(dessert.quantity * dessert.dessert.price)}
            </p>
          </div>
        </div>
        <button onClick={() => cartCtx.removeItemOfCart(dessert)}>
          <img src={deleteImg} className="logos" />
        </button>
      </div>
    </li>
  );
}
