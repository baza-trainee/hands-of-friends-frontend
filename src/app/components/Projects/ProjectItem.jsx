import React from "react";
import Link from "next/link";
import Image from "next/image";

import Action from '../Action';
export default function ProjectItem({ data}) {
  return (
    
      <li key={data.id} className="flex flex-col min-w-[360px] h-[890px]  
      xl:min-w-[330px] xl:min-h-[996px] xl:mb-0
      2xl:min-w-[352px] 2xl:min-h-[962px]">
          <Image
        src={data.image}
        alt= "Photo of the project"
        width={330}
        height={400}
        className=" w-[360px] h-[400px] object-cover
        xl:w-[330px] xl:h-[400px]
        2xl:w-[352px] 2xl:h-[426px]"
        />
            <h3 className="mb-1 mt-6 text-2xl font-body
            xl:text-xl 2xl:font-bold">{data.title}</h3>
            <span
              className="text-lg">{data.start_date} - {data.end_date}
            </span>
        
            <p className="mt-6 w-[360px] text-lg font-medium leading-6 text-left text-black font-body
            xl:w-[330px] xl:h-[408px]
            2xl:w-[352px] 2xl:h-[504px]">
              {data.description}
            </p>
            <button
          onClick={() => router.push(`/projects/${data.id}`)}
          type="button"
          className=" block min-w-[198px] min-h-[60px] mx-auto rounded-md underline underline-offset-4 px-0 mt-8 font-normal bg-transperent text-black border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue md:mt-10 xl:mt-8"
        >
         Детальніше
        </button>
          </li>
   
  );
}
