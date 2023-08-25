import React from "react";
import {Button} from 'reactstrap';
//import PropTypes from "prop-types";

const PaginationC = (prop) => {
  console.log("currentPage",prop.currentPage);
  // Calculate the total number of pages
  const totalPages = Math.ceil(prop.totalCards / prop.cardsPerPage);
  const currentRangeStart = (prop.currentPage - 1) * prop.cardsPerPage + 1;
  const currentRangeEnd = Math.min(prop.currentPage * prop.cardsPerPage, prop.totalCards);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
    <div className="pagination-container d-flex justify-content-between">
      <p className="page-link mt-3">
        Showing {currentRangeStart} - {currentRangeEnd} of {prop.totalCards} records
      </p>
      <ul className="pagination m-2">
        <li className="page-item">
          <Button
            className="page-link"
            onClick={() => prop.onPageChange(prop.currentPage - 1)}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </Button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${
              prop.currentPage === number ? "active" : ""
            }`}
          >
            <Button
              className="page-link"
              onClick={() => prop.onPageChange(number)}
            >
              {number}
            </Button>
          </li>
        ))}
        <li className="page-item">
          <Button
            className="page-link"
            onClick={() => prop.onPageChange(prop.currentPage + 1)}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </Button>
        </li>
      </ul>
    </div>
  </nav>
     
  );
};
// Pagination.propTypes = {
//   prop.currentPage: PropTypes.number.isRequired,
//   prop.cardsPerPage: PropTypes.number.isRequired,
//   prop.totalCards: PropTypes.number.isRequired,
//   prop.onPageChange: PropTypes.func.isRequired
// };

export default PaginationC;