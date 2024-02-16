"use client";

import React from "react";
import UniversalSlider from "../ UniversalSlider";
import HeroItem from "./HeroItem";

const HeroSlider = () => {
  return (
    <>
      <div className="HeroSlider max-w-[1440px] relative mx-auto bg-gray">
        <UniversalSlider
          endpoint="hero-slider/"
          ItemComponent={HeroItem}
          swiperSettings={{}}
        />
      </div>
    </>
  );
};

export default HeroSlider;
