export const GET_MOVIES = "GET_MOVIES";

export function getMovies(movies) {
    return {
        type: GET_MOVIES,
        payload: movies
    }
}
