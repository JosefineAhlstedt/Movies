/* This is a service for communicating with TMDB */
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie";
const KEY = "?api_key=2cf58f4ae4a18a5788ace7d7765b5d45&language=en-US&page=1";

//Get the most popular movies
const getPopular = async () => {
  const res = await axios.get(`${BASE_URL}/popular/${KEY}`);
  return res.data;
};

//Get toplisted movies
const getTop = async () => {
  const res = await axios.get(`${BASE_URL}/top_rated/${KEY}`);
  return res.data;
};

//Get the movies in cinema right now
const getTheaters = async () => {
  const res = await axios.get(`${BASE_URL}/now_playing/${KEY}`);
  return res.data;
};

const functions = {
  getPopular,
  getTop,
  getTheaters,
};

export default functions;
