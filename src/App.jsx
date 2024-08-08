import { useState, useContext } from "react";

import DessertsList from "./components/DessertsList";
import "./App.css";
import Cart from "./components/Cart";

import CartContextProvider from "./store/CartContext";
import { Checkout } from "./components/Checkout";
import ConfirmOrderContext from "./store/ConfirmOrderContext";

function App() {
  
  const [confirmOrder, setConfirmOrder] = useState(false);

  
  function showCheckout() {
    setConfirmOrder(true);
  }

  function hideCheckout() {
    setConfirmOrder(false);
  }

  const confirmCtxValue = {
    confirmOrder: confirmOrder,
    showCheckout: showCheckout,
    hideCheckout: hideCheckout,
  };

  return (
    <ConfirmOrderContext.Provider value={confirmCtxValue}>
      <CartContextProvider >
        <div id="main">
          <header>
            <h1>Desserts</h1>
          </header>
          <div id="container">
            <DessertsList  />
            <Cart />
          </div>
        </div>
        <Checkout />
      </CartContextProvider>
    </ConfirmOrderContext.Provider>
  );
}

export default App;
