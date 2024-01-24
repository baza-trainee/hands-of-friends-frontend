"use client";

import { useState, useEffect } from "react";
import getFetchedData from "@/app/helpers/helperAPI";
import TendersPagination from "@/app/components/Tenders/TendersPagination";

function TendersData() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    // fetch(
    //   `https://hands-of-friends-backend.onrender.com/api/content_management/tenders/`,
    //   { cache: "no-store" }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setTenders(data);
    //   });

    async function fetchData() {
      const tenderPromise = getFetchedData('tenders/', { "Accept-Language": "uk" });
      const [tenderData] = await Promise.all([tenderPromise]);
      setTenders(tenderData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <TendersPagination data={tenders} />
    </div>
  );
}
export default TendersData;
