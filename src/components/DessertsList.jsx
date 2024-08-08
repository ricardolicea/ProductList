import data from "../data.json";

import Dessert from "./Dessert.jsx";
import { CartContext } from "../store/CartContext.jsx";
import { useCallback } from "react";

export default function DessertsList() {
  const dessertList = data;
 
  return (
    <ul className="desserts">
      {dessertList.map((dessert) => (
          <Dessert dessert={dessert} key={dessert.name} />
      ))}
    </ul>
  );
}
