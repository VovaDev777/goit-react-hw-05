import { useEffect, useState } from "react";
import { fetchRewievsById } from "../../helpers/fetchData"
import { useParams } from "react-router-dom";


const MovieRewievs = () => {
  const { movieId } = useParams();
  const [rewievData, setRewievData] = useState([]);

  useEffect(() => {
    async function getRewievs(id) {
      try {
        const fetchRewievs = await fetchRewievsById(id);
        setRewievData(fetchRewievs);
      } catch (error) {
        console.log(error)
      }
    }
    getRewievs(movieId);
  }, [movieId])

  

  return (
    <div>
      {rewievData.length === 0 ? (
        <p>No reviews yet...</p>
      ) : (
        rewievData.map((rewiev) => (
          <div key={rewiev.id}>
            <h2>Author: {rewiev.author}</h2>
            <p>{rewiev.content}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default MovieRewievs