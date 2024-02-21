"use client";

import React, { useState, useEffect } from "react";
import Section from "../Section";
import Container from "../Container";
import ProjectPageList from "./ProjectPageList";
import Pagination from "./PaginationProjects";
import ProjectsHeader from "./ProjectsHeader";
import Skeleton from "./Skeleton";

export default function ProjectsPagination({ data }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  // const [activeTab, setActiveTab] = useState("all");
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const [isLoading, setIsLoading] = useState(true);
  let skeleton = [...new Array(6)].map((_, i) => (
    <Skeleton key={i} className="bg-zinc-200" />
  ));

  // console.log(data)
  useEffect(() => {
    setIsLoading(true);
    

    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
    setIsLoading(false);
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

 

  return (
    <>
      <ProjectsHeader/>
      {currentItems && (
        <Container>
          <Section>
            {isLoading ? (
              <ul className="grid lg:grid-cols-3 gap-5 mb-40">{skeleton}</ul>
            ) : (
              <>
                <ProjectPageList currentItems={currentItems} />
                <Pagination
                  handlePageClick={handlePageClick}
                  pageCount={pageCount}
                />
              </>
            )}
          </Section>
        </Container>
      )}
    </>
  );
}
