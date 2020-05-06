import React from "react";
import Block from "../components/Block";
import Logo from "../components/Logo";
import ThemeContext from "../components/ThemeContext";
import { css } from "@emotion/core";
import { Title } from "../components/Title";

const BrandsHeader = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <Block background="https://picsum.photos/1920/1080?random=1">
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

const Brands = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <main>
      <BrandsHeader />
    </main>
  );
};

export default Brands;
