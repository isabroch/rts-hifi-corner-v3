import React from "react";
import Logo from "../components/Logo";
import { css } from "@emotion/core";
import ThemeContext from "../components/ThemeContext";

const Hero = props => {
  const theme = React.useContext(ThemeContext);
  const defaultBackground = "https://via.placeholder.com/1000";

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        min-height: 80vh;
        color: ${theme.textColor};
        background-repeat: no-repeat;
        padding: 2rem;
        background-size: cover;
        background-attachment: fixed;
        background-image: url(${props.backgroundImage || defaultBackground});
      `}
    >
      <div>{props.children}</div>
    </div>
  );
};

const Home = props => {
  return (
    <main>
      <Hero backgroundImage="https://picsum.photos/1920/1080?random=1">
        <Logo />
      </Hero>
      Home
    </main>
  );
};

export default Home;
