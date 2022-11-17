import React, { Suspense, lazy, useEffect } from "react";
// import "./App.css";
import { GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import { ErrorBoundary } from "react-error-boundary";

import { fetchData } from "./services/products.service";
import { useProductContext } from "./context/productsContext";

const Cart = lazy(() => import("./pages/Cart"));
const resource = fetchData();

function App() {
  const addProducts = useProductContext((state) => state.addProducts);

  const pagination = useProductContext((state) => state.pagination);

  const currPage = useProductContext((s) => s.currPage);

  const products = resource?.products?.read();

  useEffect(() => {
    const convertedProducts = products.map((el) => ({
      ...el,
      isSelected: false,
      selectedQty: 0,
      amount: 0,
      errorMsg: "",
    }));
    addProducts(convertedProducts);
    // console.log("ADding products in useEffect");
  }, [products]);

  const currPageItems = pagination?.get(currPage);

  console.log("Pages", { pagination, pages: pagination.size, currPage });
  return (
    <ErrorBoundary fallback={<h1> Something went wrong please try again </h1>}>
      {" "}
      <Theme>
        <GlobalStyle />
        <Suspense fallback={<h1> Loading page please wait </h1>}>
          {" "}
          <Router>
            <Navbar />
            <Routes>
              <Route element={<Layout />}>
                <Route path="/header" element={<Header />} />{" "}
                <Route
                  path="/teerex-store"
                  element={
                    <Products
                      products={products}
                      currPageItems={currPageItems}
                      pages={pagination.size}
                    />
                  }
                />{" "}
                <Route path="/cart" element={<Cart />} />{" "}
              </Route>{" "}
            </Routes>{" "}
          </Router>{" "}
        </Suspense>{" "}
      </Theme>{" "}
    </ErrorBoundary>
  );
}

export default App;
