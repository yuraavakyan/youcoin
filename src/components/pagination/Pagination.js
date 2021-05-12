import React from "react";
import { useSelector } from "react-redux";
import { changePage, changePerPage } from "../../storeModifyingFunctions/data";
import "./pagination.scss";

const Pagination = () => {
  const { page, coinsToSkip, perPage } = useSelector((state) => state);

  const handlePreviousPageClick = () => {
    changePage(page - 1, +(coinsToSkip - perPage));
  };

  const handleNextPageClick = () => {
    changePage(page + 1, +(coinsToSkip + perPage));
  };

  const handleChangePerPageClick = (event) => {
    changePerPage(+event.target.innerHTML);
  };

  return (
    <div className="page-handling">
      <div className="per-page">
        <span className="per-page-item" onClick={handleChangePerPageClick}>
          20
        </span>
        <span className="per-page-item" onClick={handleChangePerPageClick}>
          50
        </span>
        <span className="per-page-item" onClick={handleChangePerPageClick}>
          100
        </span>
      </div>
      <div className="change-page">
        <span
          className={`previous-page-btn ${coinsToSkip < 1 ? "disabled" : ""}`}
          onClick={handlePreviousPageClick}
        >
          Previous
        </span>
        <span className="next-page-btn" onClick={handleNextPageClick}>
          Next
        </span>
      </div>
    </div>
  );
};

export default Pagination;
