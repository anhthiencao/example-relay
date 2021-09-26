import React from "react";
import PropTypes from "prop-types";

const usePage = (rows) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return {
    emptyRows,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};

usePage.propTypes = {};

export default usePage;
