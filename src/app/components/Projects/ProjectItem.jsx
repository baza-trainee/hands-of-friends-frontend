import React from "react";
import Link from "next/link";
import Image from "next/image";

// import Action from '../Action';
export default function ProjectItem({ data}) {
  return (
    
      <li key={data.id} className="flex flex-col min-w-[288px] h-[844px] 
      sm:min-w-[388px] sm:h-[858px]
      md:min-w-[334px] md:h-[983px]
      xl:min-w-[330px] xl:min-h-[996px] 
      2xl:min-w-[352px] 2xl:min-h-[962px]">
          <Image
        src={data.image}
        alt= "Photo of the project"
        width={330}
        height={400}
        className="w-[288px] h-[320px] object-cover
        sm:w-[388px] sm:h-[430px]
        md:w-[334px] md:h-[371px]
        xl:w-[330px] xl:h-[400px]
        2xl:w-[352px] 2xl:h-[426px]"
        />
            <h3 className="mb-1 mt-6 text-xl font-['Open_Sans'] font-bold
            md:mt-8">{data.title}</h3>
            <span
              className="font-body text-base md:text-lg">{data.start_date} - {data.end_date}
            </span>
        
            <p className="mt-4 w-[288px] h-[352px] text-base leading-6 text-left text-black font-body
            sm:w-[388px] sm:h-[316px]
            md:w-[334px] md:h-[408px] md:text-lg
            xl:w-[330px] xl:h-[408px]
            2xl:w-[352px] 2xl:h-[352px]">
              {data.description}
            </p>
            <button
          onClick={() => router.push(`/projects/${data.id}`)}
          type="button"
          className=" block min-w-[198px] min-h-[60px] mx-auto rounded-md underline underline-offset-4 px-0 mt-4 font-normal bg-transperent text-black text-xl border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue md:mt-8 md:text-2xl md:min-h-[64px] xl:mt-4 2xl:mt-8 2xl:text-xl 2xl:min-h-[60px]"
        >
         Детальніше
        </button>
          </li>
   
  );
}
