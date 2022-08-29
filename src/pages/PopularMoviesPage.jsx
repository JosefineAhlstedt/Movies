import React from "react";
import { useQuery } from "react-query";
import MovieCard from "../components/MovieCard";
import MoviesAPI from "../services/MoviesAPI";
import { Container } from "react-bootstrap";

function PopularMoviesPage() {
  const { data, error, isError, isLoading } = useQuery(
    ["popular"],
    MoviesAPI.getPopular
  );

  return (
    <Container className="py-3">
      <h1>Popular movies</h1>

      {data && <MovieCard data={data} />}
      {isError && <h1>Something went wrong...</h1>}
      {isLoading && <h1>Loading...</h1>}
    </Container>
  );
}

export default PopularMoviesPage;
