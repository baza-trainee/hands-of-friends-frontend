import { useState, useEffect } from "react";
import Section from "../Section";
import Container from "../Container";
import TenderList from "./TenderList";
import Pagination from "../../components/Tenders/Pagination";
import TendersHeader from "./TendersHeader";

export default function TendersPagination({ data }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [activeTab, setActiveTab] = useState("all");
  const itemsPerPage = 9;
  const endOffset = itemOffset + itemsPerPage;

  // console.log(data)
  useEffect(() => {
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
      {currentItems && (
        <Container>
          <Section>
            <TenderList currentItems={currentItems} activeTab={activeTab} />
            <Pagination
              handlePageClick={handlePageClick}
              pageCount={pageCount}
            />
          </Section>
        </Container>
      )}
    </>
  );
};