import React from "react";
import Logo from "../components/Logo";
import ThemeContext from "../components/ThemeContext";
import { css } from "@emotion/core";
import Block from "../components/Block";
import Carousel from "../components/Carousel";

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
      <Block background={theme.color.light} color={theme.color.brand}>
        <Carousel>
          <span>Slide 1</span>
          <span>Slide 2</span>
          <span>Slide 3</span>
          <span>Slide 4</span>
          <span>Slide 5</span>
          <span>Slide 6</span>
          <span>Slide 7</span>
          <span>Slide 8</span>
          <span>Slide 9</span>
          <span>Slide 10</span>
        </Carousel>
      </Block>
    </main>
  );
};

export default Home;
