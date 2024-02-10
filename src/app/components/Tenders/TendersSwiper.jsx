"use client";

import React from "react";
import UniversalSlider from "../ UniversalSlider";
import TenderItem from "./TenderItem";

export default function TenderSwiperList() {
  return (
    <div className="wrapperTender">
      <UniversalSlider
        endpoint="tenders/"
        ItemComponent={TenderItem}
        swiperSettings={{
          breakpoints: {
            // 320: { slidesPerView: 1.15, spaceBetween: 16 },
            // 420: { slidesPerView: 1.3, spaceBetween: 16 },
            // 768: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 3, spaceBetween: 20 },
          },
        }}
      />
    </div>
  );
}
