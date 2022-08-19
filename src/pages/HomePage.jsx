import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const HomePage = () => {
  return (
    <Container className="py-3">
      <h1>Welcome!</h1>
      <Container>
        <Button variant="warning">Warning</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="warning">Warning</Button>
      </Container>
    </Container>
  );
};

export default HomePage;
