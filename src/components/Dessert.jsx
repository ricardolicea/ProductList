import addToCartImg from "../assets/images/icon-add-to-cart.svg";
import addImg from "../assets/images/icon-increment-quantity.svg";
import remImg from "../assets/images/icon-decrement-quantity.svg";
import { CartContext } from "../store/CartContext";
import { useContext, useEffect, useState } from "react";
import { currencyFormatter } from "../util/formatting";

export default function Dessert({ dessert }) {
  const cartCtx = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1)

  useEffect(() =>{
     let addedAux = false;
    const desserts = [...cartCtx.desserts];
    const index = desserts.findIndex(
      (des) => des.dessert.name === dessert.name
    );

    if (index > -1) {
      addedAux = true;
      console.log(addedAux, dessert.name);
      console.log(desserts[index])
      setQuantity(desserts[index].quantity)
    }
    setIsAdded(addedAux);
  }, [cartCtx])

  


  let imgDessertClassName = "img";
  if (!isAdded) {
    imgDessertClassName = "img";
  } else {
    imgDessertClassName = "imgAdded";
  }
  return (
    <li>
      <div className="dessert">
        <img className={imgDessertClassName} src={dessert.image.desktop} />
        {!isAdded ? (
          <button className="addToCartBtn" onClick={() => cartCtx.addItemToCart(dessert)}>
            <div className="addToCart">
              <img src={addToCartImg} alt="" className="logos" />
              <span>Add to Cart</span>
            </div>
          </button>
        ) : (
          <div className="addToCartAdded">
            <button onClick={() => cartCtx.decreaseItem(dessert)}>
              <img src={remImg} alt="" className="logosAdded" /> 
            </button>
            <span>{quantity}</span>
            <button onClick={() => cartCtx.increaseItem(dessert)}>
              <img src={addImg} alt="" className="logosAdded" />
            </button>
          </div>
        )}

        <article className="data">
          <p className="category">{dessert.category}</p>
          <h2 className="name">{dessert.name}</h2>
          <p className="price">{currencyFormatter.format(dessert.price)}</p>
        </article>
      </div>
    </li>
  );
}
