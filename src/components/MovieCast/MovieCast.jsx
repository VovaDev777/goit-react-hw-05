import { useState } from "react";
import { useParams } from "react-router-dom"



const MovieCast = () => {

    const {movieId} = useParams();
    const [castData, setCastData] = useState([]);

  return (
    <div>
        dsafsd
    </div>
  )
}

export default MovieCast