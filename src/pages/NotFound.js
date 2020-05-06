/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "@reach/router";
import Block from "../components/Block";
import { css } from "@emotion/core";
import ThemeContext from "../components/ThemeContext";

export default function NotFound() {
  const theme = React.useContext(ThemeContext);

  return (
    <Block background="white" textColor="black" size={theme.maxSize.large}>
      Couldn't find the page. Are you lost? &nbsp; <Link to="/">Go Home!</Link>
    </Block>
  );
}
