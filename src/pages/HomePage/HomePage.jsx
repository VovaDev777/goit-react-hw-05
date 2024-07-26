import { fetchData } from '../../helpers/fetchData';
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import css from '../HomePage/HomePage.module.css'
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
    const [data, setData] = useState([]);
    const location = useLocation();

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
        <div className={css.container}>
            <h1 className={css.text}>Trending Today</h1>
            <MovieList filmList={data} state={location}/>
        </div>
    )
}

export default HomePage