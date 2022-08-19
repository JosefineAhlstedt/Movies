import { useQuery } from "react-query";
import MoviesAPI from "../services/MoviesAPI";

const useMovies = () => {
  return useQuery("popular", MoviesAPI.getPopular);
};

export default useMovies;
