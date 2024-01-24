import ReactPaginate from "react-paginate";

export default function Pagination({ handlePageClick, pageCount }) {
	return (
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
	)
};
