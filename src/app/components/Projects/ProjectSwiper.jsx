"use client";

import React from "react";
import UniversalSlider from "../ UniversalSlider";
import ProjectItem from "./ProjectItem";

export default function ProjectSwiperList() {
  return (
    <div className="wrapperTender">
      <UniversalSlider
        endpoint="projects/"
        ItemComponent={ProjectItem}
        swiperSettings={{
          breakpoints: {
            // 320: { slidesPerView: 1.15, spaceBetween: 16 },
            // 420: { slidesPerView: 1.3, spaceBetween: 16 },
            // 768: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 3, spaceBetween: 20 },
            1420: { slidesPerView: 3, spaceBetween: 24 }
          },
        }}
      />
    </div>
  );
}
