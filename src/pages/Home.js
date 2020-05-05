import React from "react";
import Logo from "../components/Logo";
import ThemeContext from "../components/ThemeContext";
import { css } from "@emotion/core";
import Block from "../components/Block";
import { Carousel, CarouselSlide } from "../components/Carousel";
import {
  faFacebook,
  faBlogger,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import { SquareSocialMediaLink } from "./SquareSocialMediaLink";
import { Blurb } from "./Blurb";

const Home = props => {
  const theme = React.useContext(ThemeContext);

  return (
    <main>
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
      <Block centered background="https://picsum.photos/1920/1080?random=2">
        <p
          css={css`
            text-transform: uppercase;
            margin: 0.5em 2em;
            font-size: ${theme.fontSize.xl};
            text-shadow: ${theme.shadow};
          `}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          aliquam non ex!
        </p>
      </Block>
      <Block centered background={theme.color.light} color={theme.color.brand}>
        <Carousel>
          <CarouselSlide
            linkTo="/shop/products/1"
            title="Product 1"
            image="https://picsum.photos/100/100?random=1"
          />
          <CarouselSlide
            linkTo="/shop/products/12"
            title="Product 12"
            image="https://picsum.photos/100/100?random=12"
          />
          <CarouselSlide
            linkTo="/shop/products/10"
            title="Product 10"
            image="https://picsum.photos/100/100?random=10"
          />
        </Carousel>
      </Block>
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
      <Block
        centered
        background={theme.color.neutralDark}
        padding="3rem 2rem 4rem"
      >
        <Blurb title="History" linkTo="/history" priority={6}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          quisquam ipsam totam omnis eaque cumque rem officia! Odit, aliquam
          illo. Lorem ipsum dolor sit amet.
        </Blurb>
        <Blurb title="News" linkTo="/news" priority={6}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          quisquam ipsam totam omnis eaque cumque rem officia! Odit, aliquam
          illo. Lorem ipsum dolor sit amet.
        </Blurb>
        <Blurb title="Shop" linkTo="/shop" priority={6}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          quisquam ipsam totam omnis eaque cumque rem officia! Odit, aliquam
          illo. Lorem ipsum dolor sit amet.
        </Blurb>
      </Block>
    </main>
  );
};

export default Home;
