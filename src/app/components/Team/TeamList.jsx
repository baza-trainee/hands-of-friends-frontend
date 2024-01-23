/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import TeamItem from "./TeamItems";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Skeleton from "./Skeleton";

async function getTeam(headers) {
  try {
    const response = await axios.get(
      "https://hands-of-friends-backend.onrender.com/api/content_management/team/",
      { headers }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default function TeamList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const teamPromise = getTeam({ "Accept-Language": "uk" });

      const [teamData] = await Promise.all([teamPromise]);
      setData(teamData);
    }
    fetchData();
  }, []);

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
