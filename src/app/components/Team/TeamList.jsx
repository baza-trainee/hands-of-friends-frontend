"use client";

import React from "react";

import UniversalSlider from "../UniversalSlider";
import TeamItem from "./TeamItems";

export default function TeamList() {
  return (
    <div className="wrapperTeam">
      <UniversalSlider
        endpoint="team/"
        ItemComponent={TeamItem}
        loaderType='team'
        swiperSettings={{
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          },
        }}
      />
    </div>
  );
}