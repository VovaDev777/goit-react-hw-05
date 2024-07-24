import { useEffect, useState } from "react";
import { fetchRewievsById } from "../../helpers/fetchData"
import { useParams } from "react-router-dom";
import css from '../MovieReviews/MovieRewievs.module.css'


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
    <div className={css.con}>
      {rewievData.length === 0 ? (
        <p className={css.noRew}>No reviews yet...</p>
      ) : (
        rewievData.map((rewiev) => (
          <div key={rewiev.id} className={css.textCon}>
            <h2 className={css.author}>Author: {rewiev.author}</h2>
            <p className={css.text}>{rewiev.content}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default MovieRewievs