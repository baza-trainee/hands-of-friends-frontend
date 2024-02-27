"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";
import UniversalSlider from "../ UniversalSlider";
import HeroItem from "./HeroItem";
import Container from "../Container";

const HeroSlider = ({ lng }) => {
  const { t } = useTranslation(lng, "hero");
  return (
    <>
      <div className="HeroSlider max-w-[1440px] mb-6 md:mb-0 relative mx-auto">
        <UniversalSlider
          endpoint="hero-slider/"
          ItemComponent={HeroItem}
          skeletonType="hero"
          useBullets={true}
          swiperSettings={{}}
        />
      </div>
      <Container>
        <Link
          href="https://www.monobank.ua/?lang=uk"
          target="_blank"
          rel="noopener noreferrer"
          className="block py-4 text-lg text-center text-white transition rounded cursor-pointer border-violet bg-violet w-full md:hidden"
        >
          {t("btn")}
        </Link>
      </Container>
    </>
  );
};

export default HeroSlider;
