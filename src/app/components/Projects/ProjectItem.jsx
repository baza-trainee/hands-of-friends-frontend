import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectItem({ item, href }) {
  return (
    <Link href={href}>
      <li key={item.id} className="flex flex-col min-w-[360px] mb-8
      2xl:min-w-[22.5rem]">
          <Image
        src={item.image}
        alt= "Photo of the project"
        width={384}
        height={426}
        className=" w-[360px] h-[400px] object-cover
        2xl:w-[384px] 2xl:h-[426px]"
        />
            <h3 className="mb-1 mt-6 text-2xl font-body">{item.title}</h3>
            <span
              className={`font-bold text-lg ${
                item.is_active ? "text-green" : "text-lightGray"
              }`}
            >
              {item.is_active ? "Активний" : "Архівний"}
            </span>
        
            <p className="mt-6 w-[360px] text-lg font-medium leading-6 text-left text-black font-body
            2xl:w-[384px]">
              {item.description}
            </p>
          </li>
    </Link>
  );
}
