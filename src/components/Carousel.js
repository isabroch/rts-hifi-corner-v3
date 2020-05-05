import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import ThemeContext from "./ThemeContext";

const CarouselSlide = props => {
  const theme = React.useContext(ThemeContext);
  return (
    <div
      css={css`
         {
          display: block;
          width: 100%;
          height: 50vmin;
          min-height: 200px;
          margin-right: 1rem;
          padding: 10vmin 0;

          a {
            position: relative;
            height: 100%;
            width: 100%;
            display: block;
            &:hover {
              filter: brightness(1.1);
            }
          }

          .carouselTitle {
            top: 10%;
            right: 55%;
            display: block;
            font-size: ${theme.fontSize.l};
            text-transform: uppercase;
            position: absolute;
            max-width: 12ch;
            font-weight: ${theme.fontWeight.bold};
            color: ${theme.color.brand};
            margin: 0;
            line-height: 1;
            z-index: 1;
            background-color: ${theme.color.neutralLightOpacity};
            backdrop-filter: blur(5px);
            text-shadow: 1px 1px 1px ${theme.color.light};
            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25),
              2px 2px 2px 1px rgba(0, 0, 0, 0.1),
              6px 6px 8px 2px rgba(0, 0, 0, 0.1);
            padding: 0.5em;
          }

          img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        }
      `}
    >
      <Link to={props.linkTo}>
        <h2 className="carouselTitle">{props.title}</h2>
        <img src={props.image} alt="" />
      </Link>
    </div>
  );
};

const Carousel = props => {
  const theme = React.useContext(ThemeContext);

  return (
    <Flickity
      options={{
        pageDots: false,
        wrapAround: true,
        autoPlay: 5500,
        imagesLoaded: true
      }}
      css={css`
        width: 100%;
        max-width: 1200px;

        .flickity-button-icon {
          fill: ${theme.color.brand};
        }
        .flickity-prev-next-button {
          width: 100px;
          height: 100px;
        }
      `}
    >
      {props.children}
    </Flickity>
  );
};

export { Carousel, CarouselSlide };
