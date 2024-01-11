/* eslint-disable @next/next/no-img-element */
"use client";

import { dataTeam } from "./data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TeamList() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      keyboard={true}
      modules={[Keyboard, Pagination, Navigation, Mousewheel]}
      loop={true}
      className="swiper font-body font-normal leading-normal text-[#020617]"
    >
      {dataTeam.map((item, index) => (
        <SwiperSlide
          key={index}
          className="flex flex-col items-center w-[15.19rem] border border-[#D1D5DB] cursor-pointer"
        >
          <img
            alt={item.alt}
            width={265}
            height={290}
            className="bg-slate-500 mb-3"
          />
          <h3 className="mb-2 text-2xl">{item.name}</h3>
          <p className="text-lg">{item.position}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
