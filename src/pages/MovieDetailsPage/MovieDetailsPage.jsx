import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchDataById } from "../../helpers/fetchData";
import { Link, Outlet, useLocation } from "react-router-dom";
import css from '../MovieDetailsPage/MovieDetailsPage.module.css'


const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [filmInfo, setFilmInfo] = useState(null);
    const location = useLocation();


    useEffect(() => {
        async function fetchFilmById(id) {
            try {
                const filmDescription = await fetchDataById(id);
                setFilmInfo(filmDescription);
            } catch (error) {
                console.log(error)
            }
        }
        fetchFilmById(movieId);
    }, [movieId])


    return (
        <>
            <div className={css.btnCon}>
                <button className={css.btn}><Link className={css.link} to={location.state?.from || '/'}>Go back</Link></button>
            </div>
            {filmInfo && (
                <div className={css.detailCon}>
                    <img className={css.image} src={`https://image.tmdb.org/t/p/w500${filmInfo.poster_path}`} alt={filmInfo.original_title} />
                    <div className={css.descCon}>
                        <h2 className={css.name}>{filmInfo.original_title}</h2>
                        <p className={css.score}>User Score: {Math.round(filmInfo.vote_average * 10)}%</p>
                        <h3 className={css.overview}>Overview</h3>
                        <p className={css.overviewText}>{filmInfo.overview}</p>
                        <h3 className={css.genres}>Genres</h3>
                        <p className={css.genresText}>{filmInfo.genres.map((genre) => {
                            return genre.name;
                        }).join(" ")}</p>
                    </div>
                </div>
            )}
            <div className={css.additionalCon}>
                <p className={css.text}>Additional information</p>
                <Link className={css.cast} to="cast" state={{ from: location.state?.from }}>Cast</Link>
                <Link className={css.cast} to="rewievs" state={{ from: location.state?.from }}> Reviews</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default MovieDetailsPage
