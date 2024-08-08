import { createContext, useState, useReducer } from "react";

export const CartContext = createContext({
  desserts: [],
  addItemToCart: () => {},
  removeItemOfCart: () => {},
  increaseItem: () => {},
  decreaseItem: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const prevDesserts = [...state.desserts];
    const existingDessertIndex = prevDesserts.findIndex(
      (dessert) => dessert.dessert.name === action.payload.name
    );
    if (existingDessertIndex >= 0) {
      const updatedDessert = {
        ...prevDesserts[existingDessertIndex],
        quantity: prevDesserts[existingDessertIndex].quantity + 1,
      };
      prevDesserts[existingDessertIndex] = updatedDessert;
      return {
        desserts: [...prevDesserts],
      };
    } else {
      return {
        desserts: [...state.desserts, { dessert: action.payload, quantity: 1 }],
      };
    }
  }

  if(action.type === "REMOVE_ITEM"){
    const prevDesserts = [...state.desserts];
      const existingDessertIndex = prevDesserts.findIndex(
        (dessert) => dessert.dessert.name === action.payload.dessert.name
      );
      prevDesserts.splice(existingDessertIndex, 1);
      return {
        desserts: [...prevDesserts],
      };
  }

  if(action.type === 'INCREASE_ITEM'){
    const prevDesserts = [...state.desserts];
      const existingDessertIndex = prevDesserts.findIndex(
        (dessert) => dessert.dessert.name === action.payload.name
      );
      const updatedDessert = {
        ...prevDesserts[existingDessertIndex],
        quantity: prevDesserts[existingDessertIndex].quantity + 1,
      };
      prevDesserts[existingDessertIndex] = updatedDessert;
      return {
        desserts: [...prevDesserts],
      };
  }

  if(action.type === 'DECREASE_ITEM'){
    const prevDesserts = [...state.desserts];
    const existingDessertIndex = prevDesserts.findIndex(
      (dessert) => dessert.dessert.name === action.payload.name
    );
    const updatedDessert = {
      ...prevDesserts[existingDessertIndex],
      quantity: prevDesserts[existingDessertIndex].quantity - 1,
    };

    if (updatedDessert.quantity < 1) {
      prevDesserts.splice(existingDessertIndex, 1);
      return {
        desserts: [...prevDesserts],
      };
    } else {
      prevDesserts[existingDessertIndex] = updatedDessert;
      return {
        desserts: [...prevDesserts],
      };
    }
  }

  return state;
}

export default function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, { desserts: [] });


  function addCartItem(item) {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  }

  function removeCartItem(item) {
    dispatch({
        type: "REMOVE_ITEM",
        payload: item,
      });

  }
  function increaseItem(item) {
    dispatch({
        type: "INCREASE_ITEM",
        payload: item,
      });
  }
  function decreaseItem(item) {
    dispatch({
        type: "DECREASE_ITEM",
        payload: item,
      });
  }

  const ctxValue = {
    desserts: cartState.desserts,
    addItemToCart: addCartItem,
    removeItemOfCart: removeCartItem,
    increaseItem: increaseItem,
    decreaseItem: decreaseItem,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
