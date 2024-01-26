"use client";

import { useHttp } from "@/app/hooks/useHttp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";

import TeamItem from "./TeamItems";
import Skeleton from "./Skeleton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TeamList() {
  const [data, setData] = useHttp("team/");

  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      grabCursor={true}
      keyboard={true}
      cssMode={true}
      modules={[Keyboard, Pagination, Navigation, A11y]}
      loop={true}
      className="swiper font-body font-normal leading-normal text-black"
    >
      {!data.length
        ? Array(5)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide
                className="flex flex-col items-center cursor-pointer"
                key={index}
              >
                <Skeleton />
              </SwiperSlide>
            ))
        : data.map((item, index) => (
            <SwiperSlide className="flex flex-col items-center " key={index}>
              <TeamItem data={item} />
            </SwiperSlide>
          ))}
    </Swiper>
  );
}
