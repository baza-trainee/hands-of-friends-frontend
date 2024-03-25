"use client";

import React from "react";

import Title from "../../Title";
import UniversalSlider from "../../UniversalSlider";
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
          loaderType="donors-partners"
          swiperSettings={{
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 20 },
              1440: { slidesPerView: 4, spaceBetween: 20 },
            },
          }}
        />
      </div>
    </>
  );
};

export default PartnerWrapper;