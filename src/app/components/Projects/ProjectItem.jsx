import React from "react";
import Link from "next/link";
import Image from "next/image";
import Action from '../Action';
export default function ProjectItem({ data}) {
  return (
    <Link href={`/projects/${data.id}`}>
      <li key={data.id} className="flex flex-col min-w-[360px] h-[890px]  
      xl:min-w-[330px] xl:min-h-[996px] xl:mb-0
      2xl:min-w-[22.5rem]">
          <Image
        src={data.image}
        alt= "Photo of the project"
        width={330}
        height={400}
        className=" w-[360px] h-[400px] object-cover
        xl:w-[330px] xl:h-[400px]
        2xl:w-[384px] 2xl:h-[426px]"
        />
            <h3 className="mb-1 mt-6 text-2xl font-body">{data.title}</h3>
            <span
              className={`font-bold text-lg ${
                data.is_active ? "text-green" : "text-lightGray"
              }`}
            >
              {data.is_active ? "Активний" : "Архівний"}
            </span>
        
            <p className="mt-6 w-[360px] text-lg font-medium leading-6 text-left text-black font-body
            xl:w-[330px] xl:h-[408px]
            2xl:w-[384px]">
              {data.description}
            </p>
            <Action
          onClick={() => router.push(`/projects/${data.id}`)}
          type="button"
          className=" block min-w-[198px] mx-auto px-0 mt-8 font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue md:mt-10 xl:mt-8"
        >
         Дізнатись більше
        </Action>
          </li>
    </Link>
  );
}
