import React, {useState} from 'react';
import {useEffect} from 'react';
import './styles.css';
import searchIcon from './search.svg';

import MovieCard from './MovieCard';

//going to use an external api, which will give information about the movies

const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=3decaa0d';
const App = () => {

    //you can have multiple states or even multiple use effect hooks, there's no limit
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const searchMovies = async (title) => {
        //this will call the API
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        //renders movies from the search
        setMovies(data.Search); //console.log to view movie object in console
    };

    //using this as static data to render out something to know what we're working with
    // this has been replaced by the useState()
    /*const movie = {

        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"

    };*/

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(event) => {setSearchTerm(event.target.value)}}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies.length > 0 //if
                    ? (
                        <div className="container">
                            {/* <MovieCard movie={movies[9]}/> */ }
                            {movies.map((movie) => <MovieCard movie={movie}/>)}
                        </div>
                    ) : //else
                    (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )

            }


        </div>
    );

};

export default App;