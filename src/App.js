import React, { Suspense } from "react";
// import "./App.css";
import { GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Navbar />
        <Suspense fallback={<h1>Loading page please wait</h1>}>
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/header" element={<Header />} />
                <Route path="/" element={<Products />} />
              </Route>
            </Routes>
          </Router>
        </Suspense>
      </Theme>
    </>
  );
}

export default App;
