import React from "react";
import logo from "../images/logo.png";
import { css } from "@emotion/core";

const Logo = () => (
  <img
    css={css`
      max-width: 150px;
      display: block;
    `}
    src={logo}
    alt="hificorner.co.uk"
  />
);

export default Logo;
