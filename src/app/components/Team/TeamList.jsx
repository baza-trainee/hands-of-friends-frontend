"use client";

import { dataTeam } from "../../[lang]/team/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TeamList() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      centeredSlides={true}
      loop={true}
      className="swiper pb-[3.03rem] font-body font-normal leading-normal text-[#020617]"
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
          <h3 className="text-2xl tracking-[0.008rem] mb-2">{item.name}</h3>
          <p className="text-lg tracking-[0.002rem]">{item.position}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
