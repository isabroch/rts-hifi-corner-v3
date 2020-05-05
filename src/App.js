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
  const theme = useState({
    fontSize: {
      s: "0.8rem",
      m: "1rem",
      l: "2rem",
      xl: "3rem"
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 800
    },
    color: {
      required: "#da2a2a",
      brand: "#a39161",
      brandDark: "#68542B",
      dark: "#000000",
      darkOpacity: "rgba(0, 0, 0, 0.75)",
      light: "#ffffff",
      neutralDark: "#444444",
      neutral: "#acacac",
      neutralLightOpacity: "rgba(243, 243, 243, 0.8)",
      neutralLight: "#f3f3f3"
    }
  });

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <ThemeContext.Consumer>
          {([theme]) => (
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
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
