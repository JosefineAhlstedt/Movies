import React from "react";
import { useQuery } from "react-query";
import MovieCard from "../components/MovieCard";
import MoviesAPI from "../services/MoviesAPI";
import { Container } from "react-bootstrap";

function TopMoviesPage() {
  const { data, error, isError, isLoading } = useQuery(
    ["top"],
    MoviesAPI.getTop
  );

  return (
    <Container className="py-3">
      <h1>Top movies</h1>

      {data && <MovieCard data={data} />}
    </Container>
  );
}

export default TopMoviesPage;
