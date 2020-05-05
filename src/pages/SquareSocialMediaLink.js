import React from "react";
import ThemeContext from "../components/ThemeContext";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
export const SquareSocialMediaLink = props => {
  const theme = React.useContext(ThemeContext);
  return (
    <Link
      to={props.to}
      css={css`
        color: inherit;
        flex: 1;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 25vmin;
        display: flex;
        background-size: cover;
        background-image: url(${props.background});
      `}
    >
      <FontAwesomeIcon
        icon={props.icon}
        fixedWidth
        css={css`
          filter: drop-shadow(${theme.shadow});
          padding: 15vmin 2rem;
        `}
      />
    </Link>
  );
};
