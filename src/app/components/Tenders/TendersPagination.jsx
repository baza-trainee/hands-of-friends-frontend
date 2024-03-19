import React, { useState, useEffect } from "react";

import Section from "../Section";
import Container from "../Container";
import TenderList from "./TenderList";
import Pagination from "../Pagination";
import TendersHeader from "./TendersHeader";

import Loader from '../../../../public/img/loader.svg'

export default function TendersPagination({ data, isLoading }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [activeTab, setActiveTab] = useState("all");

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;

  useEffect(() => {
    if (data && typeof data.props == 'undefined') {
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
    }
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
          {isLoading
            ? <div className='flex items-center justify-center overflow-hidden my-16'>
              <Loader className='animate-spin' />
            </div>
            : data.length > 0 && data && currentItems && typeof currentItems !== 'undefined'
              ? <>
                <TenderList currentItems={currentItems} activeTab={activeTab} />
                <Pagination
                  handlePageClick={handlePageClick}
                  pageCount={pageCount}
                />
              </>
              : <div className='flex items-center justify-center mb-8 xl:mb-20'>
                {data}
              </div>
          }
        </Section>
      </Container>
    </>
  );
}