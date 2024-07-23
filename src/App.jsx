import { NavLink, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"
import MovieCast from "./components/MovieCast/MovieCast"


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
        <Route path="/movies" element={<div>movies</div>} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}> 
          <Route path="cast" element={<MovieCast />}/>
          <Route path="rewievs" element={<div>rew</div>}/>
        </Route>
      </Routes>
    </>
    
  )
}

export default App