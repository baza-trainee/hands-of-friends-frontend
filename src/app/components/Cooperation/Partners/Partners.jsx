import React from "react";
import PartnerWrapper from "./PartnerWrapper";

export const Partners = () => {
  return (
    <div
      className="mb-16
      sm:mb-[4.5rem]
      md:mb-28
      xl:mb-36
    "
    >
      <PartnerWrapper title="Донори" />
      <div
        className="hidden
      md:block"
      >
        <PartnerWrapper title="Партнери" />
      </div>
    </div>
  );
};
