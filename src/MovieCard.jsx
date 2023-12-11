import React from 'react';
import {useState , useEffect} from "react";
import './styles.css';
import {Link} from "react-router-dom";



//this file is for react components
// movie is the props for the MovieCard component
// react components accepts a single argument which is the props object

const MovieCard = ({movie}) => {

    return (
        <div className="movie">
            <div>
                <Link to={"/play"}><p>{movie.Year}</p></Link>
            </div>

            <div>
                <img

                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
                    alt={movie.Title}

                />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );

};

export default MovieCard;