import React from "react";
import { Container } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

function PaginationComponent({ page, nextPage, prevPage }) {
  return (
    <Pagination>
      <Pagination.Prev onClick={prevPage} />
      <Pagination.Item>{page}</Pagination.Item>
      <Pagination.Next onClick={nextPage} />
    </Pagination>
  );
}

export default PaginationComponent;
