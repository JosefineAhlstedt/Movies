import React from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

function SingleMovieCard({ data }) {
  return (
    <>
      {data && (
        <Container>
          <h1>{data.original_title}</h1>
          <p>
            {data.runtime} min • {data.release_date}
          </p>
          <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path} />
          <p>{data.overview}</p>
        </Container>
      )}
    </>
  );
}

export default SingleMovieCard;
