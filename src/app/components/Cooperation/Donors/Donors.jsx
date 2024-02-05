"use client";

import React from "react";
import Title from "../../Title";
import UniversalSlider from "../../ UniversalSlider";
import DonorItem from "./DonorItem";

const Donors = () => {
  return (
    <>
      <Title titleName="Донори" className="titleNoPseudo" />
      <div className="wrapperDonor">
        <UniversalSlider
          endpoint="partners/"
          ItemComponent={DonorItem}
          swiperSettings={{
            breakpoints: {
              320: { slidesPerView: 3.2, spaceBetween: 8 },
              420: { slidesPerView: 3.5, spaceBetween: 8 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1280: { slidesPerView: 5, spaceBetween: 20 },
            },
          }}
        />
      </div>
    </>
  );
};

export default Donors;
