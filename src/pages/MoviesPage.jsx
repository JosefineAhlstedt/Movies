import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import useMovies from "../hooks/useMovies";

function MoviesPage() {
  const { data, error, isError, isLoading } = useMovies();

  return (
    <Container className="py-3">
      <h1>Movies</h1>
      {data && (
        <Row>
          {data.map((movies) => (
            <Col>
              <Card
                style={{ width: "13rem" }}
                key={movies.title}
                className="m-4"
              >
                <Card.Img
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w500" + movies.poster_path}
                />
                <Card.Body>
                  <Card.Title>{movies.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default MoviesPage;
