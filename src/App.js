import React, { useState, useEffect } from "react";
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
import requestData from "./functions/requestData";

const App = () => {
  const theme = React.useContext(ThemeContext);

  const [categoryFilter, updateCategoryFilter] = useState("");
  const [manufacturerFilter, updateManufacturerFilter] = useState("");
  const [manufacturers, updateManufacturers] = useState([]);
  const [categories, updateCategories] = useState([]);
  const [products, updateProducts] = useState([]);

  // page first render
  async function onPageStart() {
    let manufacturersData = await requestData([
      "https://hifi-corner.herokuapp.com/api/v1/brands"
    ]);
    updateManufacturers(manufacturersData || []);

    let categoriesData = await requestData([
      "https://hifi-corner.herokuapp.com/api/v1/categories"
    ]);
    updateCategories(categoriesData || []);

    let productsData = await requestData([
      "https://hifi-corner.herokuapp.com/api/v1/products"
    ]);
    let productsObj = {};
    productsData.forEach(item => (productsObj[item.sku] = item));
    updateProducts(productsObj || []);
  }

  useEffect(() => {
    onPageStart();
  }, []);

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
            <Shop
              path="/shop"
              data={{
                categories: categories,
                manufacturers: manufacturers
              }}
              updateFilter={{
                category: updateCategoryFilter,
                manufacturer: updateManufacturerFilter
              }}
            />
            <ShopProducts
              path="/shop/products"
              data={{
                categories: categories,
                manufacturers: manufacturers,
                products: products
              }}
              filter={{
                category: categoryFilter,
                manufacturer: manufacturerFilter
              }}
              updateFilter={{
                category: updateCategoryFilter,
                manufacturer: updateManufacturerFilter
              }}
            />
            <ProductDetails
              path="/shop/products/:id"
              filter={{
                category: categoryFilter,
                manufacturer: manufacturerFilter
              }}
              data={{ products: products }}
            />
            <NotFound default />
          </Router>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
