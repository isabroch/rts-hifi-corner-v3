import React from "react";
import ThemeContext from "../components/ThemeContext";
import { css } from "@emotion/core";
import { Link } from "@reach/router";
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
