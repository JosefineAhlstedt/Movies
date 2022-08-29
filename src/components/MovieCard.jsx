import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ data }) {
  return (
    <>
      {data && (
        <Row>
          {data.map((movie) => (
            <Col md={3} sm={6} xs={9} lg={3}>
              <Card
                style={{
                  textDecoration: "none",
                  backgroundColor: "black",
                }}
                key={movie.title}
                className="m-3 text-center"
                as={Link}
                to={`/movie/${movie.id}`}
              >
                <Card.Img
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "0.7rem",
                    }}
                  >
                    {movie.title}
                  </Card.Title>
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
