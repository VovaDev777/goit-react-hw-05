import { fetchData } from '../../helpers/fetchData';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchFilms() {
            try {
                const {results} = await fetchData();
                // console.log(films)
                setData(results);
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchFilms();
    }, []);

// console.log(data);
    return (
        <div>
            <h1>Trending Today</h1>
            <ul>
                {data.map((film) => (
                    <li key={film.id}>
                        <Link to={`/movies/${film.id}`}>{film.original_title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage