"use client";

import React, { useState, useEffect } from "react";
import getFetchedData from "@/app/helpers/helperAPI";

import Skeleton from "./Skeleton";
import Image from "next/image";
import Action from "../Action";

// import { dataProjects } from "./data";

// async function getProjects() {
//   try {
//     const response = await axios.get(
//       "https://hands-of-friends-backend.onrender.com/api/content_management/projects/?limit=3"
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }

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
      // console.log(projectData);
      setLastPage(lastPage);

    }
    setPage(page);
    fetchData();
    setIsLoading(false);
  }, [page]);

  return (
    <>
      <ul className="max-w-[1200px] grid grid-cols-3 gap-6 not-italic leading-normal">
        { isLoading? skeleton : 
        data.map((item) => (
          <li key={item.id} className="flex flex-col min-w-[22.5rem] mb-8">
          <Image
        src={item.image}
        alt= "Photo of the project"
        width={384}
        height={426}
        className="mb-3 h-[426px] object-cover"
        />
            <h3 className="mb-1 mt-6 text-2xl font-body">{item.title}</h3>
            <span
              className={`font-bold text-lg ${
                item.is_active ? "text-green" : "text-lightGray"
              }`}
            >
              {item.is_active ? "Активний" : "Архівний"}
            </span>
        
            <p className="mt-6 w-[22.5rem] text-lg font-medium leading-6 text-left text-black font-body">
              {item.description}
            </p>
          </li>
        ))}
      </ul> 
     { lastPage?
      <Action  onClick={() => setPage(page=>(page+1))}
     
        type="button"
        className="block px-0 mx-auto min-w-[13.63rem] font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue"
      >
        Завантажити більше
      </Action> :
      <></>
}
    </>
  );
}
