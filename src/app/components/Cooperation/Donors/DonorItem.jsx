import React from "react";
import Image from "next/image";

export default function DonorItem({ data }) {
  return (
    <li className=" bg-[#E0F2FE]">
      <Image
        src={data.image}
        alt={`${data.image} donor logo`}
        width={90}
        height={52}
        className="opacity-50
        sm:w-[110px] sm:h-[64px]
        md:w-[157px] md:h-[100px]"
      />
    </li>
  );
}
