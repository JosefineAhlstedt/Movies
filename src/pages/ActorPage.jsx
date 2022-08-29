import React from "react";
import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";
import ActorCard from "../components/ActorCard";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

function ActorPage() {
  //get the id from the url
  const { id } = useParams();
  //get the data
  const { data, error, isError, isLoading } = useQuery(
    ["actor", { id }],
    MoviesAPI.getActor
  );

  //Using the data in the ActorCard component and display it (if we get the data)
  return (
    <Container className="py-3">
      {data && <ActorCard data={data} />}
      {isError && <h1>Something went wrong...</h1>}
      {isLoading && <h1>Loading...</h1>}
    </Container>
  );
}

export default ActorPage;
