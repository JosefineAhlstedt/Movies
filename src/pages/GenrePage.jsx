import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";
import MovieCard from "../components/MovieCard";
import PaginationComponent from "../components/PaginationComponent";

function GenrePage() {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const { data, error, isError, isLoading } = useQuery(
    ["chosenGenre", { id }, { page }],
    MoviesAPI.getChosenGenre
  );
  return (
    <Container className="py-3">
      {data && <MovieCard data={data} />}
      {data && (
        <PaginationComponent
          page={page}
          nextPage={() => setPage((current) => current + 1)}
          prevPage={() => setPage((current) => current - 1)}
        />
      )}
    </Container>
  );
}

export default GenrePage;
