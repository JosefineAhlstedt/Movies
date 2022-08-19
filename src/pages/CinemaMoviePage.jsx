import React from "react";
import { useQuery } from "react-query";
import MovieCard from "../components/MovieCard";
import MoviesAPI from "../services/MoviesAPI";
import { Container } from "react-bootstrap";

function CinemaMoviePage() {
  const { data, error, isError, isLoading } = useQuery(
    ["cinema"],
    MoviesAPI.getTheaters
  );

  return (
    <Container className="py-3">
      <h1>Movies in theaters now</h1>

      {data && <MovieCard data={data} />}
    </Container>
  );
}

export default CinemaMoviePage;
