import { fetchData } from '../../helpers/fetchData';
import { useEffect, useState } from 'react'

const HomePage = () => {

    useEffect(() => {
        async function fetchFilms() {
            try {
                const films = await fetchData();
                console.log(films.data.results)
            } catch (error) {
                console.log(error)
            }
        } 
        fetchFilms();
    }, []);

  return (
    <div>
        <div>
            <p></p>
            <p></p>
        </div>

    </div>
  )
}

export default HomePage