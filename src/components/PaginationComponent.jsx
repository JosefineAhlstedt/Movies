import React from "react";
import { Container } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { useSearchParams } from "react-router-dom";

function PaginationComponent({ page, turnPage }) {
  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => {
          turnPage({
            page: Number(page) - 1,
          });
        }}
      />
      <Pagination.Item>{page}</Pagination.Item>
      <Pagination.Next
        onClick={() => {
          turnPage({
            page: Number(page) + 1,
          });
        }}
      />
    </Pagination>
  );
}

export default PaginationComponent;
