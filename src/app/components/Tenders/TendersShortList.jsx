import React, { useState, useEffect } from "react";

import TenderItem from "./TenderItem";
import getFetchedData from "@/app/helpers/helperAPI";
import Skeleton from "./Skeleton";

export default function TendersList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let skeleton = [...new Array(3)].map((_, i) => (
    <Skeleton key={i} className="bg-zinc-200" />
  ));

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const tenderPromise = getFetchedData("tenders/", {
        "Accept-Language": "uk",
      });

      const [tenderData] = await Promise.all([tenderPromise]);
      setData(tenderData.slice(0, 3));
    }
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <>
      <ul className="min-w-[18rem] grid gap-6 not-italic leading-normal 
       sm:min-w-[388px]
       xl:min-w-[1120px] xl:lg:grid-cols-3 xl:gap-6
       2xl:min-w-[1200px] 2xl:lg:grid-cols-3 2xl:gap-5">
        {isLoading
          ? skeleton
          : data.map((tender) => (
              <TenderItem
                key={tender.id}
                tender={tender}
                href={`/tenders/${tender.id}`}
              />
            ))}
      </ul>
    </>
  );
}
