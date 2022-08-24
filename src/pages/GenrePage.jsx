import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";
import MovieCard from "../components/MovieCard";
import PaginationComponent from "../components/PaginationComponent";
import { useSearchParams } from "react-router-dom";

function GenrePage() {
  const { id } = useParams();
  let [searchParams, setSearchParams] = useSearchParams({
    page: 1,
  });
  const page = searchParams.get("page");
  const { data, error, isError, isLoading } = useQuery(
    ["chosenGenre", { id }, { page }],
    MoviesAPI.getChosenGenre
  );

  //   useEffect(() => {
  //     setSearchParams({ page: 1 });
  //   }, []);

  return (
    <Container className="py-3">
      {data && <MovieCard data={data} />}
      {data && <PaginationComponent page={page} turnPage={setSearchParams} />}
    </Container>
  );
}

export default GenrePage;
