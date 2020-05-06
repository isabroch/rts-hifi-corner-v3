import React, { useContext, useState, useEffect } from "react";
import { css } from "@emotion/core";
import ThemeContext from "../components/ThemeContext";
import { Link } from "@reach/router";
import ButtonStyle from "../components/Button";

const Grid = ({ items, defaultBackground = "white", textColor = "white" }) => {
  return (
    <ul
      css={css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        padding: 0;
        margin: 0;
        list-style: none;
      `}
    >
      {items.map(({ image, key, content, action }) => {
        return (
          <li
            key={key}
            css={css`
              display: flex;
              background-color: ${defaultBackground};
              background-size: cover;
              padding-top: 100%;
              position: relative;
              overflow: hidden;
              transition: 0.1s filter ease;
              ${image &&
                css`
                  &::before {
                    content: "";
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: ${`url(${image})`};
                    opacity: 0.95;
                    transition: 0.1s opacity ease;
                    background-size: cover;
                    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.1);
                  }
                `}
              &:hover {
                filter: brightness(0.9);
                &::before {
                  opacity: 0.5;
                }
              }
            `}
          >
            <Link
              onClick={action}
              css={css`
                font-weight: bold;
                display: flex;
                width: 100%;
                height: 100%;
                position: absolute;
                text-align: center;
                place-content: center;
                place-items: center;
                top: 50%;
                transform: translateY(-50%);
                color: ${textColor};
                text-transform: uppercase;
                text-decoration: none;
              `}
              to="/shop/products"
            >
              {content}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
const Shop = ({ data, updateFilter }) => {
  const theme = useContext(ThemeContext);
  const [menuItems, updateMenuItems] = useState([]);

  useEffect(() => {
    (async function getItems() {
      let items = [];

      let brands = data.manufacturers;

      let categories = data.categories;

      items.push(
        ...brands.map(({ image, name }) => ({
          image: image,
          key: name,
          content: "",
          action: () => updateFilter.manufacturer(name)
        })),
        ...categories.map((name, index) => ({
          image: `https://picsum.photos/1920/1080?random=${8 + index}`,
          key: name,
          content: name,
          action: () => updateFilter.category(name)
        })),
        {
          image: null,
          key: "all",
          content: (
            <span css={ButtonStyle({ backgroundColor: theme.color.brandDark })}>
              Shop All
            </span>
          ),
          action: () => {
            updateFilter.manufacturer("");
            updateFilter.category("");
          }
        }
      );

      updateMenuItems(items);
    })();
  }, [data, updateFilter]);

  return (
    <nav
      css={css`
        max-width: ${theme.maxSize.medium};
        margin: 0 auto;
      `}
    >
      <Grid defaultBackground={theme.color.brand} items={menuItems} />
    </nav>
  );
};

export default Shop;
