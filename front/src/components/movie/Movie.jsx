import React from "react";
import {Movie as movieData} from "./../../utils/initialData";
import "./style.css";


const Movie = () => {
    return (

        <div className="movie">
            <div className='movie__img'>
                <img src={movieData.picture} alt=""/>
            </div>
            <div className="movie__info">
                <div className="movie__nameRu">{movieData.nameRu}</div>
                <div className="movie__nameEng">{movieData.nameEng}</div>
                <div className="movie__time-block">
                    <i className="fa fa-clock-o" aria-hidden="true"/>
                    <div className='movie__time'>{movieData.duration}</div>
                </div>
                <div className="movie__country-block">
                    <i className="fa fa-map-marker" aria-hidden="true"/>
                    <div className="movie__country">{movieData.country}</div>
                </div>
                <div className="movie__descr">{movieData.description}</div>
            </div>
        </div>
    )
};

export default Movie;
