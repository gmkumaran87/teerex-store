import React, { useReducer } from "react";
// import { useCallback } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import productsReducer from "./productReducer";

const initialValues = {
  filterOrder: new Map(),
  products: [],
  fProducts: [],
  filterOptions: {
    colors: new Set(),
    price: new Set(),
    type: new Set(),
    gender: new Set(),
  },
};

const useStore = () => {
  const [state, dispatch] = useReducer(productsReducer, initialValues);

  const addProducts = (value) => {
    dispatch({ type: "ADD_PRODUCTS", payload: value });
  };

  const filterProducts = (value, attribute) => {
    dispatch({ type: "SET_FILTER_ORDER", payload: attribute });
    dispatch({ type: "SET_FILTER_OPTIONS", payload: { value, attribute } });
    dispatch({ type: "FILTER_PRODUCTS" });
  };

  const removeFilters = (value, attribute) => {
    dispatch({ type: "REMOVE_FILTER_ORDER", payload: attribute });
    dispatch({ type: "REMOVE_FILTER_OPTIONS", payload: { attribute, value } });
    dispatch({ type: "FILTER_PRODUCTS", payload: value });
  };
  return {
    ...state,
    addProducts,
    filterProducts /*: useCallback(() => addProducts, [])*/,
    removeFilters,
  };
};

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => (
  <ProductContext.Provider value={useStore()}>
    {children}{" "}
  </ProductContext.Provider>
);

export const useProductContext = (selector) =>
  useContextSelector(ProductContext, selector);
