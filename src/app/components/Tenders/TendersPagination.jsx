import React, { useState, useEffect } from "react";
import Section from "../Section";
import Container from "../Container";
import TenderList from "./TenderList";
import Pagination from "../Pagination";
import TendersHeader from "./TendersHeader";
import Skeleton from "./Skeleton";

export default function TendersPagination({ data }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [activeTab, setActiveTab] = useState("all");
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const [isLoading, setIsLoading] = useState(true);
  let skeleton = [...new Array(6)].map((_, i) => (
    <Skeleton key={i} className="bg-zinc-200" />
  ));

  useEffect(() => {
    setIsLoading(true);
    const filteredData = data.filter((tender) => {
      if (activeTab === "all") {
        return true;
      } else if (activeTab === "active") {
        return tender.is_active;
      }
      return false;
    });

    setCurrentItems(filteredData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredData.length / itemsPerPage));
    setIsLoading(false);
  }, [itemOffset, itemsPerPage, data, activeTab]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <TendersHeader handleTabClick={handleTabClick} activeTab={activeTab} />

      <Container>
        <Section className="mt-8 sm:mt-10 xl:mt-20">
          {isLoading ? (
            <ul className="grid gap-5 mb-40 md:grid-cols-2 md:gap-1 xl:grid-cols-3">
              {skeleton}
            </ul>
          ) : (
            <>
              <TenderList currentItems={currentItems} activeTab={activeTab} />
              <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount}
              />
            </>
          )}
        </Section>
      </Container>
    </>
  );
}
