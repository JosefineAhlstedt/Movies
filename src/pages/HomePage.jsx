import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { data, error, isError, isLoading } = useQuery(
    ["genre"],
    MoviesAPI.getGenres
  );
  console.log(data);

  return (
    <Container className="py-3">
      <h1>Genres!</h1>
      <Container>
        <>
          {data &&
            data.map((genre) => (
              <Button
                className="m-2"
                variant="outline-light"
                as={Link}
                to={`/genre/${genre.id}`}
              >
                {genre.name}
              </Button>
            ))}
        </>
      </Container>
    </Container>
  );
};

export default HomePage;
