import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_MOVIES_BASE_URL,
    responseType: "json",
});

export const moviesAPI = {
    getAllMovies: () => {
        return instance.get('');
    },
    postMovie: (movie) => {
        return instance.post('', movie);
    },
    getMovie: (movieId) => {
        return instance.get(`/${movieId}`);
    },
    putMovie: (movieId, updatedMovie) => {
        return instance.put(`/${movieId}`, updatedMovie);
    },
    deleteMovie: (movieId) => {
        return instance.delete(`/${movieId}`);
    }


}