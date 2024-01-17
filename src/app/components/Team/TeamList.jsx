/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import TeamItem from "./TeamItems";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

async function getTeam() {
  try {
    const response = await axios.get(
      "https://hands-of-friends-backend.onrender.com/api/content_management/team/"
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
      const teamPromise = getTeam();

      const [teamData] = await Promise.all([teamPromise]);
      setData(teamData);
    }
    fetchData();
  }, []);

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      keyboard={true}
      cssMode={true}
      modules={[Keyboard, Pagination, Navigation]}
      loop={true}
      className="swiper font-body font-normal leading-normal text-black"
    >
      {data.map((item, index) => (
        <SwiperSlide
          className="flex flex-col items-center cursor-pointer"
          key={index}
        >
          <TeamItem data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
