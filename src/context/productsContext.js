import React, { useReducer } from "react";
// import { useCallback } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import productsReducer from "./productReducer";

const initialValues = {
  filterOrder: new Map(),
  products: [],
  fProducts: [],
  filterOptions: {
    color: new Set(),
    price: new Set(),
    type: new Set(),
    gender: new Set(),
  },
  cartItems: [],
  error: {
    msg: "",
  },
  pagination: new Map(),
  currPage: 1,
};

const useStore = () => {
  const [state, dispatch] = useReducer(productsReducer, initialValues);

  const searchProduct = (value) => {
    console.log("Search Product", value);
    dispatch({ type: "SEARCH_PRODUCT", payload: value });
  };
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

  const addToCart = (value) => {
    dispatch({ type: "ADD_CART_ITEM", payload: value });
  };

  const incrmtCartItem = (value) => {
    dispatch({ type: "INCREMENT_ITEM", payload: value });
  };

  const decrmtCartItem = (value) => {
    dispatch({ type: "DECREMENT_ITEM", payload: value });
  };
  const removeFromCart = (value) =>
    dispatch({ type: "REMOVE_CART_ITEM", payload: value });

  const setErrorMsg = (value) =>
    dispatch({ type: "SET_ERROR", payload: value });

  const handlePage = (page) => dispatch({ type: "SET_PAGE", payload: page });
  return {
    ...state,
    addProducts,
    filterProducts /*: useCallback(() => addProducts, [])*/,
    removeFilters,
    searchProduct,
    addToCart,
    incrmtCartItem,
    decrmtCartItem,
    removeFromCart,
    setErrorMsg,
    handlePage,
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
