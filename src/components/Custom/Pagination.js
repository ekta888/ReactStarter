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

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      {/* <div className=" d-flex justify-content-end"> */}
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
      {/* </div> */}
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