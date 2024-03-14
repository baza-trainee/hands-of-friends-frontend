import React from "react";
import Image from "next/image";

export default function PartnerItem({ data }) {
  return (
    <li className="grow max-w-[282px]">
      <div
        className="m-auto mb-4 bg-[#E0F2FE] w-[170px] h-[100px]
        md:w-[157px]
        xl:w-[170px] 
        2xl:w-[185px]"
      >
        <Image
          src={data.image}
          alt={`Logo`}
          sizes="100vw"
          width={90}
          height={52}
          className="m-auto w-[170px] h-[100px]
        md:w-[157px]
        xl:w-[170px] 
        2xl:w-[185px]"
        />
      </div>

      <p className="px-[9px] text-black text-xl font-bold text-center leading-7">
        {data.name}
      </p>
    </li>
  );
}
