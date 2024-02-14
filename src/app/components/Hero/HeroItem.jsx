import React from "react";
import Image from "next/image";

export default function HeroItem({ data }) {
  return (
    <li className="bg-[#E0F2FE]">
      <Image
        src={data.image}
        alt={`${data.image}`}
        width={1440}
        height={869}
        className="h-[300px] w-auto xl:h-[832px] 2xl:h-[869px] "
      />
      <p className="absolute left-1/2 transform -translate-x-1/2 bottom-20 mx-0 text-white text-[40px] ">
        {data.title}
      </p>
    </li>
  );
}
