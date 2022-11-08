import React, { useReducer } from "react";
// import { useCallback } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import productsReducer from "./productReducer";

const initialValues = {
  products: [],
  filteredProducts: [],
};

const useStore = () => {
  const [state, dispatch] = useReducer(productsReducer, initialValues);

  const addProducts = (value) => {
    dispatch({ type: "ADD_PRODUCTS", payload: value });
  };

  return { ...state, addProducts /*: useCallback(() => addProducts, [])*/ };
};

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => (
  <ProductContext.Provider value={useStore()}>
    {children}{" "}
  </ProductContext.Provider>
);

export const useProductContext = (selector) =>
  useContextSelector(ProductContext, selector);
