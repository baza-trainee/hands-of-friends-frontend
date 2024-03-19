import React from 'react';
import ReactPaginate from "react-paginate";

import Right from "../../../public/img/arrow-right.svg";
import Left from "../../../public/img/arrow-left.svg";

const Pagination = ({ handlePageClick, pageCount, marginPagesDisplayed = 1 }) => {
    return (
        <ReactPaginate
            nextLabel={<Right />}
            breakLabel="..."
            activeClassName="active-btn"
            containerClassName="pagination-projects"
            activeLinkClassName="active-link"
            disabledClassName="disabled"
            pageClassName="pageClass"
            pageRangeDisplayed={1}
            marginPagesDisplayed={marginPagesDisplayed}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            previousLabel={<Left />}
            renderOnZeroPageCount={null}
            breakAriaLabels={true}
        />
    );
}

export default Pagination; 