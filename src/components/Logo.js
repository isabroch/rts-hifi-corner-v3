import React from "react";
import logo from "../images/logo.png";
import { css } from "@emotion/core";
import ThemeContext from "./ThemeContext";

const Logo = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <img
      css={css`
        max-width: 150px;
        display: block;
        filter: drop-shadow(${theme.shadow});
      `}
      src={logo}
      alt="hificorner.co.uk"
    />
  );
};

export default Logo;
