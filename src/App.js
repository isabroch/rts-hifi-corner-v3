import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopProducts from "./pages/ShopProducts";
import ProductDetails from "./pages/ProductDetails";
import ThemeContext from "./components/ThemeContext";
import Shop from "./pages/Shop";
import Brands from "./pages/Brands";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { css } from "@emotion/core";

const App = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div
          css={css`
            font-family: "Nunito", sans-serif;
            font-size: ${theme.fontSize.m};
            font-weight: ${theme.fontWeight.normal};
          `}
        >
          <Header />
          <Router>
            <Home path="/" />
            <Brands path="/brands" />
            <Shop path="/shop" />
            <ShopProducts path="/shop/products" />
            <ProductDetails path="/shop/products/:id" />
            <NotFound default />
          </Router>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
