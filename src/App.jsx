import { NavLink, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"
import MovieCast from "./components/MovieCast/MovieCast"
import MovieRewievs from "./components/MovieReviews/MovieRewievs"
import '../src/helpers/reset.css'
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import MoviePage from "./pages/MoviesPage/MoviePage"
import css from '../src/App.module.css'
import { lazy } from "react"


const App = () => {

  return (
    <>
      <header>
        <nav className={css.nav}>
          <NavLink to="/" className={css.text}>Home</NavLink>
          <NavLink to="/movies" className={css.text}>Movies</NavLink>
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