import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchCastById } from "../../helpers/fetchData";
import css from '../MovieCast/MovieCast.module.css'


const MovieCast = () => {

    const { movieId } = useParams();
    const [castData, setCastData] = useState([]);

    useEffect(() => {
        async function getCast(id) {
            try {
                const filmCast = await fetchCastById(id);
                setCastData(filmCast);
            } catch (error) {
                console.log(error);
            }
        }
        getCast(movieId)
    }, [movieId])

    // console.log(castData)
    return (
        <div className={css.castCon}>
            {castData.map((cast) => (
                <div className={css.cardCon} key={cast.id}>
                    <img className={css.img} src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} width="200" height="200" alt={cast.name} />
                    <p className={css.name}>{cast.name}</p>
                    <p className={css.character}>Character: {cast.character}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieCast