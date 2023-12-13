import React from 'react';
import {useNavigate} from "react-router-dom";


const PlayMoviePage = () => {
    const navigate = useNavigate()

    return (
        <div className="app">
            <h1 onClick={() => {
               navigate("/");
            }}>BackyardFilms</h1>
        <div className="player">
        <h2>You're now watching a movie!</h2>
        </div>
        </div>
    )

}

export default PlayMoviePage