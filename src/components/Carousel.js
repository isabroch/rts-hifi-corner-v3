import React from "react";

const CarouselSlide = props => {
  return <li>{props.children}</li>;
};

const Carousel = props => {
  return (
    <ul>
      <button>Prev</button>
      {React.Children.map(props.children, child => (
        <CarouselSlide>{child}</CarouselSlide>
      ))}
      <button>Next</button>
    </ul>
  );
};

export default Carousel;
