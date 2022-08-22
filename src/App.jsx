import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import "./assets/scss/App.scss";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import TopMoviesPage from "./pages/TopMoviesPage";
import CinemaMoviePage from "./pages/CinemaMoviePage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div id="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/popular" element={<PopularMoviesPage />} />
        <Route path="/top" element={<TopMoviesPage />} />
        <Route path="/cinema" element={<CinemaMoviePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
