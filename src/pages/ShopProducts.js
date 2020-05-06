import React, { useContext } from "react";
import Block from "../components/Block";
import ThemeContext from "../components/ThemeContext";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const Breadcrumbs = ({
  links,
  linkColor = "blue",
  textColor = "black",
  className
}) => {
  /* Goal: For each item, create a link, unless it's the last one. Shows as, at most: Shop / Category / Product
  Accepts [ links ] where each object is formatted as: { name, path } */

  return (
    <ol
      className={className}
      css={css`
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0;
      `}
    >
      {links.map(({ name, path }, index) => (
        <li
          key={name}
          css={css`
            white-space: nowrap;
            a {
              color: ${linkColor};
              text-decoration: none;
              ::after {
                content: "/";
                padding: 0 1.5ch;
                color: ${textColor};
                opacity: 0.5;
                display: inline-block;
              }
            }

            span {
              color: ${textColor};
            }
          `}
        >
          {index < links.length - 1 ? (
            <Link to={path}>{name}</Link>
          ) : (
            <span>{name}</span>
          )}
        </li>
      ))}
    </ol>
  );
};

const ShopProducts = () => {
  const theme = useContext(ThemeContext);
  return (
    <Block
      background={theme.color.light}
      size={theme.maxSize.large}
      textColor={theme.color.dark}
    >
      <Breadcrumbs
        css={css`
          font-size: ${theme.fontSize.s};
        `}
        textColor={theme.color.dark}
        linkColor={theme.color.brand}
        links={[
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop/products" },
          { name: "ID", path: "/shop/products/id" }
        ]}
      />
    </Block>
  );
};

export default ShopProducts;
