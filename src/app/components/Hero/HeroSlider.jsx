"use client";

import React from "react";
import UniversalSlider from "../ UniversalSlider";
import HeroItem from "./HeroItem";

const HeroSlider = () => {
  return (
    <>
      <div className="HeroSlider relative">
        <UniversalSlider
          endpoint="projects/"
          ItemComponent={HeroItem}
          swiperSettings={{
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 2 },
              420: { slidesPerView: 1, spaceBetween: 2 },
              768: { slidesPerView: 1, spaceBetween: 2 },
              1280: { slidesPerView: 1, spaceBetween: 2 },
            },
          }}
        />
      </div>
    </>
  );
};

export default HeroSlider;
