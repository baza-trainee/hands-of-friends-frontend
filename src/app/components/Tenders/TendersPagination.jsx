import Link from "next/link";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Container from "../Container";
import Section from "../Section";
import BreadCrumbs from "../BreadCrumbs";


export default function TendersPagination(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  const [activeTab, setActiveTab] = useState("all");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="bg-image-tenders min-h-[620px]">
        <Container>
          <BreadCrumbs
            className="pt-11 mb-[319px] z-10"
            href="/"
            text="Назад"
            textColor="white"
          />
          <h2 className="text-3xl	text-white font-bold mb-16">Тендери</h2>
          <div className="flex space-x-4 gap-8">
            <button
              onClick={() => handleTabClick("all")}
              className={`focus:outline-none w-[180px] text-start text-2xl pb-2 ${
                activeTab === "all"
                  ? " text-white z-10 border-b-2"
                  : "bg-gray-300 text-fontGray border-b-2 hover:text-white transition border-transparent"
              }`}
            >
              Усі
            </button>
            <button
              onClick={() => handleTabClick("active")}
              className={`focus:outline-none w-[180px] text-start text-2xl pb-2 ${
                activeTab === "active"
                  ? " text-white border-b-2"
                  : "bg-gray-300 text-fontGray border-b-2 hover:text-white transition border-transparent "
              }`}
            >
              Активні
            </button>
          </div>
        </Container>
      </div>
      {currentItems && (
        <Container>
          <Section>
            <ul className="grid lg:grid-cols-3 gap-5 min-w-[360px] not-italic leading-normal">
              {currentItems.map((tender) => (
                <Link key={tender.id} href={`/tenders/${tender.id}`}>
                  <li
                    className="flex flex-col flex-wrap p-6 min-w-[22.5rem] min-h-[297px] bg-[#E0F2FE]"
                    style={{ cursor: "pointer" }}
                  >
                    {activeTab === "all" ||
                    (activeTab === "active" && tender.is_active) ? (
                      <>
                        <p className="flex justify-between font-body text-lg">
                          <span
                            className={`font-bold ${
                              tender.is_active ? "text-green" : "text-lightGray"
                            }`}
                          >
                            {tender.is_active ? "Активний" : "Архівний"}
                          </span>
                          <span className="text-black">{tender.date}</span>
                        </p>
                        <p className="font-sans mt-6 text-left text-2xl text-black font-medium">
                          {tender.title
                            .split(" ")
                            .slice(0, 20)
                            .map((word, index) => (
                              <span key={index}>{word.trim()} </span>
                            ))}
                          {tender.description.split(" ").length > 20 && "..."}{" "}
                        </p>
                      </>
                    ) : null}
                  </li>
                </Link>
              ))}
            </ul>
          </Section>
        </Container>
      )}
      <ReactPaginate
        activeClassName="active-btn"
        containerClassName="pagination"
        activeLinkClassName="active-link"
        disabledClassName="disabled"
        nextClassName="next"
        pageClassName="pageClass"
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<-"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
