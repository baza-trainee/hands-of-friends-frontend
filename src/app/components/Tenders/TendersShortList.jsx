"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import getFetchedData from "@/app/helpers/helperAPI";
import Skeleton from "./Skeleton";

export default function TendersList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  let skeleton = [... new Array(3)].map((_, i) => (<Skeleton key={i} className="bg-zinc-200" />));

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const tenderPromise = getFetchedData('tenders/', { "Accept-Language": "uk" });

      const [tenderData] = await Promise.all([tenderPromise]);
      setData(tenderData.slice(0, 3));

    }
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <>
         <ul className="grid lg:grid-cols-3 gap-5 min-w-[360px] not-italic leading-normal">
        {isLoading ? skeleton :
          data.map((tender) => (
            <Link key={tender.id} href={`/tenders/${tender.id}`}>
             <li
            className="flex flex-col flex-wrap p-6 min-w-[22.5rem] min-h-[297px] bg-[#E0F2FE]"
            style={{ cursor: "pointer" }}
          >
               <p className="flex justify-between font-body text-lg">
                  <span
                    className={`font-bold ${tender.is_active ? "text-green" : "text-lightGray"}`}
                  >
                    {tender.is_active ? "Активний" : "Архівний"}
                  </span>
                  <span className="text-black text-lg">{tender.end_date}</span>
                </p>
                <p className="font-sans mt-6 text-left text-2xl text-black font-medium">
                  {tender.title
                    .split(" ")
                    .slice(0, 20)
                    .map((word, index) => (
                      <span key={index}>{word.trim()} </span>
                    ))}
                  {tender.description.split(" ").length > 20 && "..."}{" "}
                </p>
            </li>
            </Link>
          ))}
      </ul>
    </>
  );
}