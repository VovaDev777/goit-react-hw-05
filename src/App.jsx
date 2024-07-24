import { NavLink, Route, Routes } from "react-router-dom"
// import HomePage from "./pages/HomePage/HomePage"
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"
import MovieCast from "./components/MovieCast/MovieCast"
import MovieRewievs from "./components/MovieReviews/MovieRewievs"
import '../src/helpers/reset.css'
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
// import MoviePage from "./pages/MoviesPage/MoviePage"
import css from '../src/App.module.css'
import { lazy, Suspense } from "react"
import clsx from "clsx"


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviesPage/MoviePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const makeNavLinkClass = ({isActive}) => {
  return clsx(css.link, isActive && css.active);
}

const App = () => {

  return (
    <>
      <header>
        <nav className={css.nav}>
          <NavLink to="/" className={makeNavLinkClass}>Home</NavLink>
          <NavLink to="/movies" className={makeNavLinkClass}>Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading Page....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="rewievs" element={<MovieRewievs />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>

  )
}

export default App