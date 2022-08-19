import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

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
                className="m-4"
              >
                <Card.Img
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
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
