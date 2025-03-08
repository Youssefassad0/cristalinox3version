import React from "react";
import Hero from "../hero/Hero";
import Cards from "../cardItems/Cards";
import Valeurs from "../cardItems/Card_Why/Valeurs";
import Slider from "../Sliders/Slider";

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Valeurs />
      <Slider />
    </>
  );
}

export default Home;
