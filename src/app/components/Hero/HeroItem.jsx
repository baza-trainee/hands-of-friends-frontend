import React from "react";
import Image from "next/image";

export default function HeroItem({ data }) {
  return (
    <>
      <li className="bg-[#E0F2FE]">
        <Image
          src={data.image}
          alt={`${data.image}`}
          width={1440}
          height={869}
          className="w-full h-[1024px] xs:h-[240px] sm:h-[288px] md:h-[440px] xl:h-[685px] 2xl:h-[869px] object-cover "
        />

        <p className="hidden md:block md:absolute xs:absolute md:left-1/2 md:transform -translate-x-1/2 bottom-20 mx-0 xs:text-black xs:text md:text-white text-[24px] md:w-[688px] lg:w-[881px] lg:text-[40px] xl:w-[1175px] ">
          {data.title}
        </p>
      </li>
      <div className="md:hidden sm:text-[24px] xs:text-[18px] xs:max-w-[288px] sm:max-w-[388px] mt-8">
        {data.title}
      </div>
    </>
  );
}
