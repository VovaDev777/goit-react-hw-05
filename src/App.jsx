import { NavLink, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"
import MovieCast from "./components/MovieCast/MovieCast"
import MovieRewievs from "./components/MovieReviews/MovieRewievs"
import '../src/helpers/reset.css'
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import MoviePage from "./pages/MoviesPage/MoviePage"


const App = () => {

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="rewievs" element={<MovieRewievs />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>

  )
}

export default App