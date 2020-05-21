import { API } from './rest/API'

export const getMoviesData = () => {
    API.moviesAPI.getAllMovies().then(response => response.data)
}