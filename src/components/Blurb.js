import React from "react";
import ThemeContext from "../components/ThemeContext";
import { css } from "@emotion/core";
import { Link } from "@reach/router";
import Block from "./Block";

export const Blurb = props => {
  const theme = React.useContext(ThemeContext);
  const HeaderPriority = Number(props.priority)
    ? `h${Number(props.priority)}`
    : `span`;
  return (
    <div
      css={css`
        text-align: center;
        text-transform: uppercase;
        max-width: 28ch;
        padding: 1rem 2rem;
        align-self: flex-start;
      `}
    >
      <Link
        to={props.linkTo}
        css={css`
          display: block;
        `}
      >
        <HeaderPriority
          css={css`
            display: inline-block;
            padding: 0.25rem 1rem;
            color: ${theme.color.brand};
            border: 1px solid ${theme.color.light};
            margin: 0.5rem;
            text-decoration: none;
            font-weight: ${theme.fontWeight.bold};
            font-size: ${theme.fontSize.m};
          `}
        >
          {props.title}
        </HeaderPriority>
      </Link>
      <p
        css={css`
          margin: 0;
          font-size: ${theme.fontSize.s};
        `}
      >
        {props.children}
      </p>
    </div>
  );
};

export const BlurbSection = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <Block
      centered
      background={theme.color.neutralDark}
      padding="3rem 2rem 4rem"
    >
      <Blurb title="History" linkTo="/history" priority={6}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        quisquam ipsam totam omnis eaque cumque rem officia! Odit, aliquam illo.
        Lorem ipsum dolor sit amet.
      </Blurb>
      <Blurb title="News" linkTo="/news" priority={6}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        quisquam ipsam totam omnis eaque cumque rem officia! Odit, aliquam illo.
        Lorem ipsum dolor sit amet.
      </Blurb>
      <Blurb title="Shop" linkTo="/shop" priority={6}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        quisquam ipsam totam omnis eaque cumque rem officia! Odit, aliquam illo.
        Lorem ipsum dolor sit amet.
      </Blurb>
    </Block>
  );
};
