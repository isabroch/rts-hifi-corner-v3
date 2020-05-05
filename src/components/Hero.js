import React from "react";
import { css } from "@emotion/core";
import ThemeContext from "./ThemeContext";
export const Hero = props => {
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
