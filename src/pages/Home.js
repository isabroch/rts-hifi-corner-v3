import React from "react";
import Logo from "../components/Logo";
import ThemeContext from "../components/ThemeContext";
import { css } from "@emotion/core";
import Block from "../components/Block";

const Home = props => {
  const theme = React.useContext(ThemeContext);

  return (
    <main>
      <Block
        css={css`
          min-height: 80vh;
        `}
        background="https://picsum.photos/1920/1080?random=1"
        centered
        fixed
      >
        <Logo />
      </Block>
      <Block centered background="https://picsum.photos/1920/1080?random=2">
        <p
          css={css`
            text-transform: uppercase;
            margin: 0.5em 2em;
            font-size: ${theme.fontSize.xl};
            text-shadow: 1px 1px 10px ${theme.color.darkOpacity};
          `}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          aliquam non ex!
        </p>
      </Block>
    </main>
  );
};

export default Home;
