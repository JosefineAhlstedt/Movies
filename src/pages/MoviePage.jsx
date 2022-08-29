import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";
import SingleMovieCard from "../components/SingleMovieCard";

function MoviePage() {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery(
    ["movie", { id }],
    MoviesAPI.getMovie
  );
  return (
    <Container className="py-3">
      {data && <SingleMovieCard data={data} />}
      {isError && <h1>Something went wrong...</h1>}
      {isLoading && <h1>Loading...</h1>}
    </Container>
  );
}

export default MoviePage;
