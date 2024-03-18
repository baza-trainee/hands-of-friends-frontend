"use client";

import React from "react";
import { useHttp } from "@/app/hooks/useHttp";
import TendersPagination from "@/app/components/Tenders/TendersPagination";

function TendersData() {
  const [tenders] = useHttp("tenders/?is_shown=true");
  const shownTenders = tenders.filter((tender) => tender.is_shown);
  return (
    <div>
      <TendersPagination data={shownTenders} />
    </div>
  );
}
export default TendersData;