import React from "react";
import Logo from "../components/Logo";
import { Hero } from "../components/Hero";

const Home = props => {
  return (
    <main>
      <Hero backgroundImage="https://picsum.photos/1920/1080?random=1">
        <Logo />
      </Hero>
      Home
    </main>
  );
};

export default Home;
