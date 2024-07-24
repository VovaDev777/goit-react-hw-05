import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchCastById } from "../../helpers/fetchData";



const MovieCast = () => {

    const {movieId} = useParams();
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

    console.log(castData)
  return (
    <div>
        {castData.map((cast) => {
             <div>
             <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt="" />
             <p>{cast.name}</p>
             <p>Character: {cast.character}</p>
         </div>
        })}
        
    </div>
  )
}

export default MovieCast