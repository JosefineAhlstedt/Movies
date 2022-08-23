import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";
import MovieCard from "../components/MovieCard";

function GenrePage() {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery(
    ["chosenGenre", { id }],
    MoviesAPI.getChosenGenre
  );
  return (
    <Container className="py-3">
      {data && <MovieCard data={data} />}

      {/* {data && <MovieCard data={data} />} */}
    </Container>
  );
}

export default GenrePage;
