// import { fetchData } from "./helpers/fetchData"
// import HomePage from './pages/HomePage/HomePage'
import { NavLink, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"


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
        <Route path="/movies/:movieId"/>
      </Routes>
    </>
  )
}

export default App