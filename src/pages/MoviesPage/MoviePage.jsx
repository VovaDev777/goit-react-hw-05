import { AiOutlineSearch } from "react-icons/ai";
import css from './MoviePage.module.css'
import { useEffect, useState } from "react";
import { fetchFilmByName } from "../../helpers/fetchData";
import { Link, useLocation } from "react-router-dom";

const MoviePage = () => {

    const [word, setWord] = useState("");
    const [films, setFilms] = useState([]);
    const location = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchWord = event.target.elements.search.value;
        setWord(searchWord);

    }

    useEffect(() => {
        if (word == "") {
            return;
        }
        async function findFilm(name) {
            try {
                const searchedFilm = await fetchFilmByName(name);
                setFilms(searchedFilm);
            } catch (error) {
                console.log(error)
            }
        }
        findFilm(word);
    }, [word])

    // console.log(films)
    return (
        <>
            <div className={css.d1}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search films"
                        name='search'
                    />
                    <button type="submit">
                        <AiOutlineSearch className={css.icon} />
                    </button>
                </form>
            </div>
            <ul>
                {films.map((film) => (
                    <li key={film.id}>
                        <Link to={`/movies/${film.id}`} state={location}>{film.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MoviePage