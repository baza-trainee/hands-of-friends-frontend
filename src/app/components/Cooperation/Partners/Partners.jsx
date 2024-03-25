"use client";

import React from "react";

import PartnerWrapper from "./PartnerWrapper";

import { useTranslation } from "@/app/i18n/client";

const Partners = ({ lng }) => {
  const { t } = useTranslation(lng, "title");
  return (
    <div
      className="mb-16
      sm:mb-[4.5rem]
      md:mb-28
      xl:mb-36"
    >
      <PartnerWrapper title={t("donors")} endpoint="donors/" />
      <PartnerWrapper title={t("partners")} endpoint="partners/" />
    </div>
  );
}

export default Partners;