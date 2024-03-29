"use client";

import React from "react";

import UniversalSlider from "../UniversalSlider";
import ProjectItem from "./ProjectItem";

export default function ProjectSwiperList() {
  return (
    <div className="wrapperProject">
      <UniversalSlider
        endpoint={`projects/?is_active=true&is_shown=true`}
        ItemComponent={ProjectItem}
        loaderType="projects"
        swiperSettings={{
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1280: { slidesPerView: 3, spaceBetween: 20 },
            1420: { slidesPerView: 3, spaceBetween: 24 }
          },
        }}
      />
    </div>
  );
}