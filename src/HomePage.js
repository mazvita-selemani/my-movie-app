import React, {useState} from 'react';
import {useEffect} from 'react';
import './styles.css';
import searchIcon from './search.svg';

import MovieCard from './MovieCard';

//going to use an external api, which will give information about the movies

const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=3decaa0d';
const HomePage = () => {

    //you can have multiple states or even multiple use effect hooks, there's no limit
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [message, setMessage] = useState('')
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

    const showMessage = () => {

        setMessage('Welcome to Backyard Films!');

    }

    const searchExist =  () => {

        return true

    }

    useEffect(() => {
        showMessage();
    }, []);

    return (
        <div className="app">
            <h1 onClick={() => {alert('You clicked me!')}}>BackyardFilms</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(event) => {setSearchTerm(event.target.value)}}
                    onClick={() => {setMessage('Search for your movies!')}}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                searchExist()
                    ?
                    (
                        //this conditional isn't great cause it means that there always has be a search
                        //for something to display
                        movies.length > 0 //if BUG: non-existent searches break app
                            ? (
                                <div className="container">
                                    {/* <MovieCard movie={movies[9]}/> */}
                                    {movies.map((movie) => <MovieCard movie={movie}/>)}
                                </div>
                            ) : //else
                            (
                                <div className="empty">
                                    <h2>{message}</h2>
                                </div>
                            )
                    ) :
                    (
                        <div className="empty">
                            <h2>Sorry, we don't have that one :(</h2>
                        </div>
                    )

            }


        </div>
    );

};

export default HomePage