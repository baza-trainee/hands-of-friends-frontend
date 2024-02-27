"use client";

import React, { useState, useEffect } from "react";
import getFetchedData from "@/app/helpers/helperAPI";

import Skeleton from "./Skeleton";
// import Image from "next/image";
import Action from "../Action";
import ProjectItem from "./ProjectItem";
// import ProjectSlider from "./Swiper";



export default function ProjectList() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState();
  const [isLoading, setIsLoading] = useState(true)
  let skeleton = [... new Array(3)].map((_, i) => (<Skeleton id={i + 1} key={i} />));

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const projectPromise = getFetchedData(`projects/?limit=3&page=${page}`, { "Accept-Language": "uk" });
      const [projectData] = await Promise.all([projectPromise]);
      const lastPage=projectData.next;
      const result=projectData.results;
      setData([...data, ...result]);
      // console.log(data);
      console.log(projectData);
      setLastPage(lastPage);

    }
    setPage(page);
    fetchData();
    setIsLoading(false);
  }, [page]);

  return (
    <>
 
      <ul className="xs:hidden
      xl:grid xl:grid-cols-3 xl:max-w-[1120px] xl:gap:5
      2xl:max-w-[1200px] 2xl:gap-6 2xl:text-lg not-italic leading-normal">
        { isLoading? skeleton : 
        data.map((item) => (
          
         <ProjectItem
         key={item.id}
         item={item}
          href={`/projects/${item.id}`}
          className="flex flex-col w-[288px] h-[844px]
          sm:w-[388px] sm:h-[858px]
          md:w-[334px] md:h-[983px]
          xl:w-[330px] xl:min-h-[996px] 
          2xl:w-[352px] 2xl:min-h-[962px]"/>
        ))
        }
      </ul> 
     { lastPage?
      <Action  onClick={() => setPage(page=>(page+1))}
     
        type="button"
        className="xs:hidden
        xl:block px-0 mx-auto min-w-[13.63rem] font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue"
      >
        Завантажити більше
      </Action> :
      <></>
      
}

    </>
  );
}
