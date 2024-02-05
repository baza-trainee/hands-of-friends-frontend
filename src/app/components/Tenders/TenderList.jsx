import React from "react";
import Skeleton from "./Skeleton";
import TenderItem from "./TenderItem";

export default function TenderList({ currentItems, activeTab, isLoading }) {
  const skeletonItems = Array.from({ length: 3 }, (_, index) => (
    <Skeleton key={index} className="bg-zinc-300" />
  ));

  return (
    <ul className="grid lg:grid-cols-3 gap-5 min-w-[360px] not-italic leading-normal">
      {isLoading
        ? skeletonItems
        : currentItems.map(
            (tender) =>
              (activeTab === "all" ||
                (activeTab === "active" && tender.is_active)) && (
                <TenderItem
                  key={tender.id}
                  tender={tender}
                  href={`/tenders/${tender.id}`}
                />
              )
          )}
    </ul>
  );
}
