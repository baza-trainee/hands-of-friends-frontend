/* eslint-disable @next/next/no-img-element */
"use client";

import { dataTeam } from "./data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TeamItem from "./TeamItems";

export default function TeamList() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      keyboard={true}
      modules={[Keyboard, Pagination, Navigation, Mousewheel]}
      loop={true}
      className="swiper font-body font-normal leading-normal text-[#020617]"
    >
      {dataTeam.map((item, index) => (
        <SwiperSlide
          className="flex flex-col items-center w-[15.19rem] border border-[#D1D5DB] cursor-pointer"
          key={index}
        >
          <TeamItem data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
