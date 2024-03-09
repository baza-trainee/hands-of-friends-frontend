"use client";

import React from "react";
import { useHttp } from "@/app/hooks/useHttp";
import TendersPagination from "@/app/components/Tenders/TendersPagination";

function TendersData() {
  const [tenders] = useHttp('tenders/?is_shown=true')
  return (
    <div>
      <TendersPagination data={tenders} />
    </div>
  );
}
export default TendersData;
