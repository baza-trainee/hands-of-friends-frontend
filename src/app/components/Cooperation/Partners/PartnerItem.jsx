import React from "react";
import Image from "next/image";

export default function PartnerItem({ data }) {
  return (
    <li className="grow ">
      <div
        className="m-auto mb-4 bg-[#E0F2FE] w-[90px]
        sm:w-[110px] sm:h-[64px]
        md:w-[170px] md:h-[100px]"
      >
        <Image
          src={data.image}
          alt={`Logo`}
          width={90}
          height={52}
          className="m-auto opacity-50
        sm:w-[110px] sm:h-[64px]
        md:w-[170px] md:h-[100px]"
        />
      </div>

      <p className=" text-black text-xl font-bold text-center leading-7">
        {data.name}
      </p>
    </li>
  );
}
