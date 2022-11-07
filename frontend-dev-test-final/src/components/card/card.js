import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={250} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={movie.image} />
                <div className="cards__overlay">
                    <div className="card__title"><button>MORE INFO</button></div>
                </div>
            </div>
            <div className="card__details">
                <span>{movie.Date}</span>
                <h4>{movie.NameEN}</h4>
                <button>{movie.Type}</button><button style={{marginLeft: "5px"}}>{movie.Duration}</button>
            </div>
        </Link>
    }
    </>
}

export default Cards