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
      {links.map(({ name, path, action = () => {} }, index) => (
        <li
          key={name}
          css={css`
            white-space: nowrap;
            a {
              color: ${linkColor};
              text-decoration: none;
            }

            &:not(:last-child)::after {
              content: "/";
              padding: 0 1.5ch;
              color: ${textColor};
              opacity: 0.5;
              display: inline-block;
            }

            span {
              color: ${textColor};
            }
          `}
        >
          {index < links.length - 1 ? (
            <Link onClick={action} to={path}>
              {name}
            </Link>
          ) : (
            <span>{name}</span>
          )}
        </li>
      ))}
    </ol>
  );
};

const ShopProducts = ({ filter, updateFilter, data }) => {
  const theme = useContext(ThemeContext);

  return (
    <Block
      css={css`
        display: block;
        min-height: 100%;
      `}
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
          {
            name: "Home",
            path: "/"
          },
          {
            name: "Shop",
            path: "/shop/products",
            action: () => {
              updateFilter.manufacturer("");
              updateFilter.category("");
            }
          },
          {
            name: filter.category || "All",
            path: "/shop/products"
          }
        ]}
      />

      <div
        css={css`
          grid-template-columns: minmax(200px, 1fr) 3fr minmax(200px, 1fr);
          grid-gap: 1em;
        `}
      >
        <Column>
          <Categories></Categories>
          <Filters></Filters>
        </Column>
        <main>
          <ViewOptions />
          <ProductGrid>
            <ProductGridCard product={"tbd"} />
          </ProductGrid>
          <ViewOptions />
        </main>
        <Column>
          <Manufacturers></Manufacturers>
        </Column>
      </div>
    </Block>
  );
};

export default ShopProducts;
