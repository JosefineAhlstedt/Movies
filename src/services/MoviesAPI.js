/* This is a service for communicating with TMDB */
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie/";
const KEY =
  "?api_key=2cf58f4ae4a18a5788ace7d7765b5d45&language=en-US&page=1&include_adult=false";

axios.defaults.baseURL = "http://localhost:3000";

//Get the most popular movies
const getPopular = async () => {
  const res = await axios.get(`${BASE_URL}popular${KEY}`);
  console.log(res.data.results);
  return res.data.results;
};

//Get toplisted movies
const getTop = async () => {
  const res = await axios.get(`${BASE_URL}top_rated${KEY}`);
  return res.data.results;
};

//Get the movies in cinema right now
const getTheaters = async () => {
  const res = await axios.get(`${BASE_URL}now_playing${KEY}`);
  return res.data.results;
};

//Get a single movie
const getMovie = async ({ queryKey }) => {
  const [movie, { id }] = queryKey;
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=2cf58f4ae4a18a5788ace7d7765b5d45&append_to_response=credits,images`
  );
  return res.data;
};

//Get actor
const getActor = async ({ queryKey }) => {
  const [actor, { id }] = queryKey;
  const res = await axios.get(
    `https://api.themoviedb.org/3/person/${id}?api_key=2cf58f4ae4a18a5788ace7d7765b5d45&append_to_response=movie_credits`
  );
  return res.data;
};

//Get genres
const getGenres = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=2cf58f4ae4a18a5788ace7d7765b5d45`
  );
  return res.data.genres;
};

//Get one genre
const getChosenGenre = async ({ queryKey }) => {
  const [genre, { id }, { page }] = queryKey;
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=2cf58f4ae4a18a5788ace7d7765b5d45&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}`
  );
  return res.data.results;
};

const functions = {
  getPopular,
  getTop,
  getTheaters,
  getMovie,
  getActor,
  getGenres,
  getChosenGenre,
};

export default functions;
