import React from "react";
import ThemeContext from "../components/ThemeContext";
import Block from "../components/Block";
import { Carousel, CarouselSlide } from "../components/Carousel";

export const ProductFeature = props => {
  const theme = React.useContext(ThemeContext);
  const { products } = props;

  if (!products) return <div>Empty</div>;

  const slides = products.map(({ id, title, image }) => (
    <CarouselSlide
      key={id}
      linkTo={`/shop/products/${id}`}
      title={title}
      image={image}
    />
  ));

  return (
    <Block
      centered
      background={theme.color.light}
      textColor={theme.color.brand}
    >
      <Carousel>{slides}</Carousel>
    </Block>
  );
};
