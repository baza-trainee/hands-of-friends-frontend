import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount }) => (

  <ReactPaginate
	 breakLabel="..."
	 activeClassName="active-btn"
	 containerClassName="pagination"
	 activeLinkClassName="active-link"
	 disabledClassName="disabled"
	 pageClassName="pageClass"
	 pageRangeDisplayed={1} 
	 marginPagesDisplayed={1} 
	 nextLabel=""
	 onPageChange={handlePageClick}
	 pageCount={pageCount}
	 previousLabel=""
	 renderOnZeroPageCount={null}
	 breakAriaLabels={true}
  />
);
export default Pagination;
