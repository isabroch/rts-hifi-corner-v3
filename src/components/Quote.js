import React from "react";
import ThemeContext from "../components/ThemeContext";
import { css } from "@emotion/core";
import Block from "../components/Block";

export const Quote = props => {
  const theme = React.useContext(ThemeContext);
  return (
    <Block
      centered
      background="https://picsum.photos/1920/1080?random=2"
      darkenBackground
    >
      <p
        css={css`
          text-transform: uppercase;
          margin: 0.5em 2em;
          font-size: ${theme.fontSize.xl};
          text-shadow: ${theme.shadow};
          max-width: ${theme.maxSize.large};
        `}
      >
        {props.children}
      </p>
    </Block>
  );
};
