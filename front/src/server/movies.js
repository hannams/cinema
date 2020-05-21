import { getMovies } from '../store/actions'
import { getAllMovies } from "./../api"


export const thunkGetMoviesData = () => async (dispatch) => {
    const response = await getAllMovies();
    dispatch(getMovies(response.data))
}