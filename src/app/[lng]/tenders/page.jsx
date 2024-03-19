"use client";

import React from "react";

import TendersPagination from "@/app/components/Tenders/TendersPagination";

import { useHttp } from "@/app/hooks/useHttp";

function TendersData() {
  const [tenders, , isLoading] = useHttp("tenders/?is_shown=true");
  const shownTenders = tenders && tenders.length > 0 && tenders.type !== 'error'
    ? tenders.filter((tender) => tender.is_shown)
    : tenders;

  return (
    <div>
      <TendersPagination data={shownTenders} isLoading={isLoading} />
    </div>
  );
}
export default TendersData;