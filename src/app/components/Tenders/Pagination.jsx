import React from 'react';
import ReactPaginate from "react-paginate";

import Right from "../../../../public/img/arrow-right.svg";
import Left from "../../../../public/img/arrow-left.svg";

export default function Pagination({ handlePageClick, pageCount }) {
  return (
    <ReactPaginate
      nextLabel={<Right />}
      breakLabel="..."
      activeClassName="active-btn"
      containerClassName="pagination"
      activeLinkClassName="active-link"
      disabledClassName="disabled"
      pageClassName="pageClass"
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      onPageChange={handlePageClick}
      pageCount={pageCount}
      previousLabel={<Left />}
      renderOnZeroPageCount={null}
      breakAriaLabels={true}
    />
  );
}
