import React from "react";
import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";
import ActorCard from "../components/ActorCard";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

function ActorPage() {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery(
    ["actor", { id }],
    MoviesAPI.getActor
  );
  return (
    <Container className="py-3">{data && <ActorCard data={data} />}</Container>
  );
}

export default ActorPage;
