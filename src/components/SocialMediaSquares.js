import React from "react";
import ThemeContext from "../components/ThemeContext";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import Block from "../components/Block";
import {
  faFacebook,
  faBlogger,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";

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

export const SocialMediaSquares = () => (
  <Block padding="0">
    <SquareSocialMediaLink
      icon={faFacebook}
      to="/facebook"
      background="https://picsum.photos/1920/1080?random=3"
    />
    <SquareSocialMediaLink
      icon={faBlogger}
      to="/blogger"
      background="https://picsum.photos/1920/1080?random=4"
    />
    <SquareSocialMediaLink
      icon={faTwitterSquare}
      to="/twitter"
      background="https://picsum.photos/1920/1080?random=5"
    />
  </Block>
);
