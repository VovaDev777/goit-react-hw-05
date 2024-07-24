import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchDataById } from "../../helpers/fetchData";
import { Link, Outlet, useLocation } from "react-router-dom";


const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [filmInfo, setFilmInfo] = useState(null);
    const location = useLocation();


    useEffect(() => {
        async function fetchFilmById(id) {
            try {
                const filmDescription = await fetchDataById(id);
                setFilmInfo(filmDescription);
                // console.log(filmDescription);
            } catch (error) {
                console.log(error)
            }
        }
        fetchFilmById(movieId);
    }, [movieId])

    // console.log(filmInfo)
    // poster_path

    return (
        <>
            <div>
                <button><Link to={location.state}>Go back</Link></button>
            </div>
            {filmInfo && (
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${filmInfo.poster_path}`} alt={filmInfo.original_title} />
                    <div>
                        <h2>{filmInfo.original_title}</h2>
                        <p>User Score: {Math.round(filmInfo.vote_average * 10)}%</p>
                        <h3>Overview</h3>
                        <p>{filmInfo.overview}</p>
                        <h3>Genres</h3>
                        <p>{filmInfo.genres.map((genre) => {
                            return genre.name;
                        }).join(" ")}</p>
                    </div>
                </div>
            )}
            <div>
                <p>Additional information</p>
                <Link to="cast">Cast</Link>
                <Link to="rewievs"> Reviews</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default MovieDetailsPage
