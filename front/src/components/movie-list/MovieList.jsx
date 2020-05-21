import react from 'react'
import { connect } from 'react-redux'
import Movie from './../movie/Movie'



const MovieList = ({ movies, loadMovies }) => {

    const moviesToShow = getMovies().map(movie => <Movie key={movie["_id"]} movie={movie} />)
    console.log(movies)
    return <p>{JSON.stringify(movies)}</p>

}

const mapStateToProps = (store) => ({
    movies: store.movies,
});

const mapDispatchToProps = (dispatch) => ({
    loadMovies: () => dispatch(thunkGetMoviesData()),
}
)
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);