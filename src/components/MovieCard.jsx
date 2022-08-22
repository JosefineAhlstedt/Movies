import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ data }) {
  return (
    <>
      {data && (
        <Row>
          {data.map((movie) => (
            <Col>
              <Card
                style={{ width: "13rem" }}
                key={movie.title}
                className="m-4 text-center"
              >
                <Card.Img
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Title>{movie.id}</Card.Title>
                  <Button variant="warning" as={Link} to={`/movie/${movie.id}`}>
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default MovieCard;
