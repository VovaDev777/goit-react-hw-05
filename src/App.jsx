// import { fetchData } from "./helpers/fetchData"
// import HomePage from './pages/HomePage/HomePage'
import { NavLink, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"


const App = () => {
  // const data = fetchData().then(console.log).catch();
  // console.log(data.json());


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
        <Route path="/movies" element={<div>movies</div>} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<div>cast</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>reviews</div>} />
      </Routes>
    </>
  )
}

export default App