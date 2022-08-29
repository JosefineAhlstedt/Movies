import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Image,
  Col,
  Button,
} from "react-bootstrap";

function SingleMovieCard({ data }) {
  return (
    <>
      {data && (
        <Container>
          <Row className="align-items-center">
            <h1>{data.original_title}</h1>
          </Row>
          <Row>
            {" "}
            <p>
              {data.runtime} min • {data.release_date}
            </p>
          </Row>
          <Row>
            <Col>
              <Image
                style={{ width: "17rem" }}
                src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
                fluid
              ></Image>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-left">
            {data.genres.map((genre) => (
              <>
                <Col xs="5" md="3" lg="2" className="m-1">
                  <Button
                    style={{ width: "9em" }}
                    as={Link}
                    to={`/genre/${genre.id}`}
                    variant="outline-light"
                  >
                    {genre.name}
                  </Button>
                </Col>
              </>
            ))}
          </Row>
          <ListGroup variant="flush" className="mt-4 mb-4">
            <ListGroup.Item className="fw-bold">Actors</ListGroup.Item>
            {data.credits.cast.slice(0, 5).map((actor) => (
              <>
                <ListGroup.Item as={Link} to={`/actor/${actor.id}`}>
                  {actor.name}
                </ListGroup.Item>
              </>
            ))}
          </ListGroup>
          <p>{data.overview}</p>
        </Container>
      )}
    </>
  );
}

export default SingleMovieCard;
