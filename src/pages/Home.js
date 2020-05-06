import React, { useEffect, useState } from "react";
import { SocialMediaSquares } from "../components/SocialMediaSquares";
import { Hero } from "../components/Hero";
import { Quote } from "../components/Quote";
import { requestProductData } from "../functions/requestProductData";
import { ProductFeature } from "../components/ProductFeature";
import { BlurbSection } from "../components/Blurb";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    (async function getFeaturedProducts() {
      let data = await requestProductData(["0001", "0013", "0030"]);

      function formatForFeature({ sku, make, model, images }) {
        return { id: sku, title: `${make} ${model}`, image: images[0] };
      }

      data = data.map(product => formatForFeature(product));

      setFeaturedProducts(data || []);
    })();
  }, []);

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
