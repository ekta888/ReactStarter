import React from "react";
import PropTypes from "prop-types";

const Pagination = ({
  currentPage,
  cardsPerPage,
  totalCards,
  onPageChange
}) => {
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const currentRangeStart = (currentPage - 1) * cardsPerPage + 1;
  const currentRangeEnd = Math.min(currentPage * cardsPerPage, totalCards);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination-container d-flex justify-content-between align-items-center">
        {/* <div className="page-count">
          Page {currentPage} of {totalPages}
        </div> */}
        <ul className="pagination m-2">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => onPageChange(number)}
              >
                {number}
              </button>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
        <p className="float-right mr-3 mb-1 text-muted">
          Showing {currentRangeStart} - {currentRangeEnd} of {totalCards} records
        </p>
      </div>
    </nav>
     
  );
};
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  cardsPerPage: PropTypes.number.isRequired,
  totalCards: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;