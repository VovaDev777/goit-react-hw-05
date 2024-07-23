import axios from "axios";

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';


const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDJhNTk1MjczMDU4YjQxMmRiZWZiN2JmZWZlNWExYyIsIm5iZiI6MTcyMTIyMTk1Ny40OTU1LCJzdWIiOiI2Njk1MjAzZmRjZWFkYWRhM2VhN2Y1ZDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6p93Ey2MoLwP9pJb4Hri5r6moL0_2RuXcX_5-mrXXFQ'
    }
};

export const fetchData = async () => {
    const response = await axios.get(url, options);

    return response.data;
}

export const fetchDataById = async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, options);

    return response.data;
}



