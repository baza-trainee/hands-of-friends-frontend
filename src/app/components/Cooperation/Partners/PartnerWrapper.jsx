"use client";

import React from "react";
import Title from "../../Title";
import UniversalSlider from "../../ UniversalSlider";
import PartnerItem from "./PartnerItem";

const PartnerWrapper = ({ title, endpoint }) => {
  return (
    <>
      <Title titleName={title} className="titleNoPseudo" />
      <div className="wrapperDonor relative">
        <UniversalSlider
          endpoint={endpoint}
          skeletonType="donor"
          ItemComponent={PartnerItem}
          swiperSettings={{
            breakpoints: {
              320: { slidesPerView: 1.1, spaceBetween: 16 },
              420: { slidesPerView: 1.3, spaceBetween: 8 },
              768: { slidesPerView: 2.6, spaceBetween: 20 },
              1280: { slidesPerView: 3.3, spaceBetween: 20 },
            },
          }}
        />
      </div>
    </>
  );
};

export default PartnerWrapper;
