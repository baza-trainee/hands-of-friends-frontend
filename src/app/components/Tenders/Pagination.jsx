import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount }) => (
  <ReactPaginate
    activeClassName="active-btn"
    containerClassName="pagination"
    activeLinkClassName="active-link"
    disabledClassName="disabled"
    pageClassName="pageClass"
    pageRangeDisplayed={3}
    marginPagesDisplayed={1}
    breakLabel="..."
    nextLabel=""
    onPageChange={handlePageClick}
    pageCount={pageCount}
    previousLabel=""
    renderOnZeroPageCount={null}
  />
);
export default Pagination;
