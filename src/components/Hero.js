import React from "react";
import Logo from "../components/Logo";
import { css } from "@emotion/core";
import Block from "../components/Block";

export const Hero = () => (
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
);
