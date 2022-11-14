import React, { Suspense, lazy } from "react";
// import "./App.css";
import { GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import { ErrorBoundary } from "react-error-boundary";
import { ProductContextProvider } from "./context/productsContext";

const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <ErrorBoundary fallback={<h1> Something went wrong please try again </h1>}>
      {" "}
      <Theme>
        <GlobalStyle />
        <ProductContextProvider>
          <Suspense fallback={<h1> Loading page please wait </h1>}>
            {" "}
            <Router>
              <Navbar />
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/header" element={<Header />} />{" "}
                  <Route path="/" element={<Products />} />{" "}
                  <Route path="/cart" element={<Cart />} />
                </Route>{" "}
              </Routes>{" "}
            </Router>{" "}
          </Suspense>{" "}
        </ProductContextProvider>{" "}
      </Theme>{" "}
    </ErrorBoundary>
  );
}

export default App;
