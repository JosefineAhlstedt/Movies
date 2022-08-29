import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//This is the component that shows all the movies in a grid like manner
//This component is used for CinemaMoviePage, PopularMoviesPage, GenrePage and TopMoviespage
function MovieCard({ data }) {
  return (
    <>
      {data && (
        <Row>
          {data.map((movie) => (
            <Col md={3} sm={6} xs={9} lg={3} key={movie.id}>
              <Card
                //Styling the card so it won't have white background
                style={{
                  textDecoration: "none",
                  backgroundColor: "black",
                }}
                key={movie.title}
                className="m-3 text-center"
                //Make the card clickable
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
