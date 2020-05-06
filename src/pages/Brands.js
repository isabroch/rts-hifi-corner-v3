import React, { useState, useEffect } from "react";
import Block from "../components/Block";
import Logo from "../components/Logo";
import ThemeContext from "../components/ThemeContext";
import { css } from "@emotion/core";
import { Title } from "../components/Title";
import requestDataArray from "../functions/requestData";
import { Link } from "@reach/router";

const BrandsHeader = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <Block
      background="https://picsum.photos/1920/1080?random=7"
      darkenBackground
    >
      <div
        css={css`
          max-width: ${theme.maxSize.large};
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 auto;
          padding: 0 2em;
          box-sizing: border-box;
        `}
      >
        <Title priority={2}>Top Brands</Title>
        <Logo />
      </div>
    </Block>
  );
};

const InlineList = ({ items }) => {
  const styles = css`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: inline;
    }
  `;

  return (
    <ul css={styles}>
      {items.map(({ key, content }, index) => (
        <li key={key}>
          {content}
          {index < items.length - 1 ? ", " : ""}
        </li>
      ))}
    </ul>
  );
};

const Brands = () => {
  const theme = React.useContext(ThemeContext);

  const [brands, updateBrands] = useState([]);

  useEffect(() => {
    (async function getBrands() {
      let data = await requestDataArray([
        "https://hifi-corner.herokuapp.com/api/v1/brands"
      ]);

      data = data.map(({ name }) => ({ key: name, content: name }));
      updateBrands(data || []);
    })();
  }, []);

  const StockedBrands = () => (
    <Block
      background={theme.color.neutralDark}
      textColor={theme.color.light}
      css={css`
        flex: 1;
        display: block;
      `}
    >
      <p
        css={css`
          color: ${theme.color.brand};
          font-weight: ${theme.fontWeight.bold};
        `}
      >
        Here are just a few of the brands we stock:
      </p>
      <InlineList items={brands} />
    </Block>
  );

  const BrandInfo = () => (
    <Block
      background="https://picsum.photos/1920/1080?random=6"
      darkenBackground={0.75}
      textColor={theme.color.light}
      css={css`
        flex: 1;
        display: block;
      `}
    >
      <Title
        textColor={theme.color.brand}
        priority={2}
        css={css`
          font-weight: ${theme.fontWeight.normal};
          margin: 0;
        `}
      >
        Brands
      </Title>
      <p>
        As an independent retailer of home audio and visual products, we are
        able to select the very best brands and manufacturers from across the
        world.
      </p>

      <p>
        Not only do we have the best known brands such as B&W, Devialet, KEF,
        Naim, and Linn; we also stock and are well versified with smaller
        autonomous companies like Michell Engineering, Neat Acoustics, Harbeth,
        SME, Trichord Research, PrimaLuna, to name but a few.
      </p>

      <p>
        With over a hundred brands, we can happily say that if a brand meets our
        high standards for sound reproduction, then you can be assured to find
        it at Hi-Fi Corner.
      </p>

      <Link
        to="/"
        css={css`
          font-weight: ${theme.fontWeight.bold};
          color: ${theme.color.brand};
          text-transform: uppercase;
          text-decoration: underline;
        `}
      >
        Visit our shop to find more brands
      </Link>
    </Block>
  );

  return (
    <main>
      <BrandsHeader />
      <Block background={theme.color.light} size={theme.maxSize.large}>
        <StockedBrands />
        <BrandInfo />
      </Block>
    </main>
  );
};

export default Brands;
