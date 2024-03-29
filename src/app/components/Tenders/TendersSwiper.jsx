"use client";

import React from "react";

import UniversalSlider from "../UniversalSlider";
import TenderItem from "./TenderItem";

export default function TenderSwiperList() {
  return (
    <div className="wrapperTender">
      <UniversalSlider
        endpoint={`tenders/?is_active=true&is_shown=true`}
        ItemComponent={TenderItem}
        loaderType="tenders"
        swiperSettings={{
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1280: { slidesPerView: 3, spaceBetween: 20 },
            1440: { slidesPerView: 3, spaceBetween: 24 },
          },
        }}
      />
    </div>
  );
}