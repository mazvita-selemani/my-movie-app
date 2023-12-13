import React from 'react';
import camera from "./camera.svg";
import {useNavigate} from "react-router-dom";

const FilmProjector = () => {

    const navigate = useNavigate();

    return (
        <div className="title">
            <h1 onClick={() => {
                navigate("/");
            }}>BackyardFilms</h1>

            <img src={camera} alt="Film Projector"/>
        </div>
    )
}

export default FilmProjector