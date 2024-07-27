import { AiOutlineSearch } from "react-icons/ai";
import css from './MoviePage.module.css'
import { useEffect, useState } from "react";
import { fetchFilmByName } from "../../helpers/fetchData";
import { useLocation, useNavigate } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

const MoviePage = () => {

    const [word, setWord] = useState("");
    const [films, setFilms] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchWord = event.target.elements.search.value;
        setWord(searchWord);
        
        navigate(`?query=${searchWord}`);
    }

    // here

    useEffect(() => {
        const query = new URLSearchParams(location.search).get('query');
        if (query) {
            setWord(query);
        }
    }, [location.search]);

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
            <div className={css.con}>
            <MovieList filmList={films} state={{ from: location}}/>
            </div>
        </>
    )
}

export default MoviePage