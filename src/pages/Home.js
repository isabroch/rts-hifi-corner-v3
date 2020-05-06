import React, { useEffect, useState } from "react";
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

const Home = () => {
  const theme = React.useContext(ThemeContext);

  const Hero = () => (
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

  const Quote = props => (
    <Block centered background="https://picsum.photos/1920/1080?random=2">
      <p
        css={css`
          text-transform: uppercase;
          margin: 0.5em 2em;
          font-size: ${theme.fontSize.xl};
          text-shadow: ${theme.shadow};
          max-width: 1200px;
        `}
      >
        {props.children}
      </p>
    </Block>
  );

  const [featuredProducts, setFeaturedProducts] = useState([]);

  async function requestProductData(idArray) {
    const productData = await Promise.all(
      idArray.map(async id => {
        const response = await fetch(
          `https://hifi-corner.herokuapp.com/api/v1/products/${id}`
        );
        const { sku, make, model, images } = await response.json();

        return { id: sku, title: `${make} ${model}`, image: images[0] };
      })
    );

    return productData;
  }

  useEffect(() => {
    (async function getFeaturedProducts() {
      const data = await requestProductData(["0001", "0013", "0030"]);
      setFeaturedProducts(data || []);
    })();
  }, []);

  const ProductFeature = props => {
    const { products } = props;
    if (!products) return <div>Empty</div>;
    console.log(products);
    const slides = products.map(({ id, title, image }) => (
      <CarouselSlide
        key={id}
        linkTo={`/shop/products/${id}`}
        title={title}
        image={image}
      />
    ));

    return (
      <Block centered background={theme.color.light} color={theme.color.brand}>
        <Carousel>{slides}</Carousel>
      </Block>
    );
  };

  const SocialMediaSquares = () => (
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

  const BlurbSection = () => (
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

  return (
    <main>
      <Hero />
      <Quote>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aliquam
        non ex!
      </Quote>
      <ProductFeature products={featuredProducts} />
      <SocialMediaSquares />
      <BlurbSection />
    </main>
  );
};

export default Home;
