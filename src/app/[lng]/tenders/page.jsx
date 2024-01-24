"use client";
import { useState, useEffect } from "react";

import TendersPagination from "@/app/components/Tenders/TendersPagination";

function getData() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    fetch(
      `https://hands-of-friends-backend.onrender.com/api/content_management/tenders/`,
      { cache: "no-store" }
    )
      .then((response) => response.json())
      .then((data) => {
        setTenders(data);
      });
  }, []);

  return (
    <div>
      <TendersPagination data={tenders} />
    </div>
  );
}
export default getData;
