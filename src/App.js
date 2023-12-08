import React from 'react';
import {useEffect} from 'react';
import './styles.css';
import searchIcon from './search.svg';

//3decaa0d
//going to use an extrenal api, which will give information about the movies

const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=3decaa0d';
const App = () => {

    const searchMovies = async (title) => {
        //this will call the API
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    };

    //using this as static data to render out something to know what we're working with
    const movie = {

            "Title": "Italian Spiderman",
            "Year": "2007",
            "imdbID": "tt2705436",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"

    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => {}}
                />
                <img
                src={searchIcon}
                alt="search"
                onChange={() => {}}
                />
            </div>

            <div className="container">
                <div>
                    <p>{movie.Year}</p>
                </div>

                <div>
                    <img
                        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
                        alt={movie.Title}

                    />
                </div>
            </div>
        </div>
    );

};

export default App;