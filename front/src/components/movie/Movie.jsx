import React from "react";
import "./movie.css";


const Movie = ({ movie }) => {
    
    return (
        <div className="movie">
            <div className='movie__img'>
                <img src={movie.data} alt=""/>
            </div>
            <div className="movie__info">
                <div className="movie__nameRu">{movie.nameRu}</div>
                <div className="movie__nameEng">{movie.name}</div>
                <div className="movie__time-block">
                    <i className="fa fa-clock-o" aria-hidden="true"/>
                    <div className='movie__time'>{movie.duration}</div>
                </div>
                <div className="movie__descr">{movie.description}</div>
            </div>
        </div>
    )
};

export default Movie;
