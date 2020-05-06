import React from "react";
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
            min-height: 100vh;
            display: grid;
            grid-template-rows: auto 1fr auto;
            font-family: "Nunito", sans-serif;
            font-size: ${theme.fontSize.m};
            font-weight: ${theme.fontWeight.normal};

            a {
              transition: filter 0.1s ease;
              &:hover {
                filter: contrast(0.5) brightness(1.5);
              }
            }
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
