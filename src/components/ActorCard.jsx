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

function ActorCard({ data }) {
  console.log("This is the data", data);
  return (
    <>
      {data && (
        <Container>
          <Row className="align-items-center">
            <h1>{data.name}</h1>
          </Row>
          <Row>
            {" "}
            <p>{data.birthday}</p>
          </Row>
          <Row className="mt-4 mb-4">
            <Col>
              <Image
                style={{ width: "17rem" }}
                src={"https://image.tmdb.org/t/p/w500" + data.profile_path}
                fluid
              ></Image>
            </Col>
          </Row>
          <h3>Biography</h3>
          <p>{data.biography}</p>
          <ListGroup variant="flush" className="mt-4 mb-4">
            <ListGroup.Item className="fw-bold">Movies</ListGroup.Item>
            {data.movie_credits.cast.map((movie) => (
              <>
                <ListGroup.Item as={Link} to={`/movie/${movie.id}`}>
                  {movie.original_title}
                </ListGroup.Item>
              </>
            ))}
          </ListGroup>
        </Container>
      )}
    </>
  );
}

export default ActorCard;
