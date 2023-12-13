import React from 'react';
import FilmProjector from "./FilmProjector";


const PlayMoviePage = () => {

    return (
        <div className="app">
            <FilmProjector></FilmProjector>
        <div className="player">
        <h2>You're now watching a movie!</h2>
        </div>
        </div>
    )

}

export default PlayMoviePage