import React, {useRef, useState} from 'react';
import FilmProjector from "./FilmProjector";
import {useEffect} from "react";


//NOTE: useEffect “delays” a piece of code from running until that render is reflected on the screen
let VIDEO_SOURCE = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const PlayMoviePage = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    const VideoPlayer = ({src, isPlaying}) => {

        const ref = useRef(null);

        useEffect(() => {
            //wrap side effect in use effect cause of timimg when rendering
            if (isPlaying) {
                ref.current.play();
                return
            }

            ref.current.pause();
        });

        return <video ref={ref} src={src} height={400} width={400} loop playsInline/>;

    };

    return (
        <div className="app">
            <FilmProjector></FilmProjector>
            <div className="player">
                <h2>You're now watching a movie!</h2>
                <div>
                    <button onClick={() => {setIsPlaying(!isPlaying)}}>
                        { isPlaying ? 'pause' : 'play'}
                    </button>
                    <VideoPlayer
                        isPlaying={isPlaying}
                        src={VIDEO_SOURCE}
                    />
                </div>
            </div>
        </div>
    );

};

export default PlayMoviePage;