import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch('https://a882e854-bc3c-47b0-9e84-cdcf71cd328f.mock.pstmn.io/api/movielist')
        .then(res => res.json())
        .then(data => setMovieList(data.Now_Showing))
    }

    return (
        <div className="movie__list">
            <div className="container">
                <div className="list__container">
                    <h2 className="list__title" style={{color:"white", opacity: true? 1 : 0.5}}>Now Showing</h2>
                    <h2 className="list__title" style={{color:"white", opacity: !true? 1 : 0.5}}>Coming Soon</h2>
                </div>
                <div className="list__cards">
                    {
                        movieList.map(movie => (
                            <Cards movie={movie} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList