import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopProducts from "./pages/ShopProducts";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Brands from "./pages/Brands";
import Home from "./pages/Home";

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      <Router>
        <Home path="/" />
        <Brands path="/brands" />
        <Shop path="/shop" />
        <ShopProducts path="/shop-products" />
        <ProductDetails path="/product/:id" />
      </Router>
      <Footer />
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
