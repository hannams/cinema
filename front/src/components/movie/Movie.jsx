import React from "react";
import {Movie as movieData}  from "./../../utils/initialData";
import style from "./style.css";



const Movie = () => {
    return (
        
        <div className="movie">
            <div className='movie__img'>
                <img src={movieData.picture} alt=""/>
            </div> 
            <div className="movie__info">
                <h1 className="movie__nameRu">{movieData.nameRu}</h1>
                <h3 className="movie__nameEng">{movieData.nameEng}</h3>
                <div className="movie__time-block">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <div className='movie__time'>{movieData.duration}</div>
                </div>
                <div className="movie__country-block">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <h4 className="movie__country">{movieData.country}</h4>
                </div>
                <p>{movieData.description}</p>
            </div>
        </div>
    )
}

export default Movie;
