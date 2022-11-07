import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://a882e854-bc3c-47b0-9e84-cdcf71cd328f.mock.pstmn.io/api/movielist")
        .then(res => res.json())
        .then(data => setPopularMovies(data))
    }, [])

    return (
        <>
            <div className="poster">
                <MovieList />
            </div>
        </>
    )
}

export default Home