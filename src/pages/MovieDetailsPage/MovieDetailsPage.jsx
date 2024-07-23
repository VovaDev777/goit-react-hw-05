import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchDataById } from "../../helpers/fetchData";


const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [filmInfo, setFilmInfo] = useState(null);


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

    console.log(filmInfo)
    // poster_path

    return (
        <>
            <div>
                <button>Go back</button>
            </div>
            {filmInfo && (
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${filmInfo.poster_path}`} alt={filmInfo.original_title} />
                    <h2>{filmInfo.original_title}</h2>
                </div>
            )}
        </>
    )
}

export default MovieDetailsPage

// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg