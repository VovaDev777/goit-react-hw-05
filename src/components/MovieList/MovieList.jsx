import css from './MovieList.module.css'
import { Link } from 'react-router-dom'

const MovieList = ({filmList, state}) => {
    return (
        <ul className={css.list}>
            {filmList.map((film) => (
                <li key={film.id} className={css.listItem}>
                    <Link to={`/movies/${film.id}`} state={state}>{film.original_title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default MovieList