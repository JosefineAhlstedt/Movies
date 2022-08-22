import React from "react";
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
                src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
                fluid
              ></Image>
            </Col>
          </Row>
          <Row className="mt-4 mb-4">
            <Col xs="3" md="2" lg="1">
              <Button variant="warning">Warning</Button>
            </Col>
            <Col xs="3" md="2" lg="1">
              <Button variant="warning">Warning</Button>
            </Col>
            <Col xs="3" md="2" lg="1">
              <Button variant="warning">Warning</Button>
            </Col>
          </Row>
          <ListGroup variant="flush" className="mt-4 mb-4">
            <ListGroup.Item className="fw-bold">Actors</ListGroup.Item>
            {data.credits.cast.slice(0, 3).map((actor) => (
              <>
                <ListGroup.Item>{actor.name}</ListGroup.Item>
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
