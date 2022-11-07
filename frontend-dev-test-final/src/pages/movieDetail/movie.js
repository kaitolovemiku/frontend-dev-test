import React, { useEffect, useState } from "react";
import "./movie.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();
  const mounths = [{id:0, value:"JAN", id:1, value:"FEB", id:2, value:"MAR", id:3, value:"APR", id:4, value:"MAY", id:5, value:"JUN", id:6, value:"JUL", id:7, value:"AUG", id:8, value:"SEP", id:9, value:"OCT", id:10, value:"NOV", id:11, value:"DEC"}]

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://a882e854-bc3c-47b0-9e84-cdcf71cd328f.mock.pstmn.io/api/movie/${id}`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="movieContainer">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          float: "left",
          marginTop: "60px",
          color: "white",
          marginLeft: "20px",
        }}
      >
        <i className="fas fa-angle-left"></i> Back
      </Link>
      <div className="contentContainer">
        <div className="movieDetailContainerOne">
            <div className="cards">
            <img
                className="cards__img"
                src={`${currentMovieDetail ? currentMovieDetail.image : ""}`}
            />
            </div>
        </div>
        <div className="movieDetailContainerTwo">
            <span style={{maginLeft: "30px"}}>{`${currentMovieDetail ? currentMovieDetail.Date : ""}`}</span>
            <p style={{margin: "10px 0", fontWeight: "500"}}>{`${currentMovieDetail ? currentMovieDetail.NameEN.toUpperCase() : ""}`}</p>
            <p style={{maxWidth: "32rem", fontSize: "0.6rem"}}>{`${currentMovieDetail ? currentMovieDetail.descriptionEN : ""}`}</p>
            <br />
            <button>{`${currentMovieDetail ? currentMovieDetail.Type : ""}`}</button><button style={{marginLeft: "10px"}}>{`${currentMovieDetail ? currentMovieDetail.Duration : ""}`}</button>
        </div>
      </div>
      <div className="contentContainer" style={{top: "18rem"}}>
        <div style={{width: "100%"}}>
            <div class="btnBroup" style={{display: "flex", width: "100%", border: "0.5px solid white", padding: "10px 24px", maxWidth: "43.5rem", marginLeft: "10px", borderRadius: "15px"}}>
                <a style={{width: "33.3%", textAlign: "center"}}>Select Showtime</a>
                <a style={{width: "33.3%", textAlign: "center"}}>Select Seats</a>
                <a style={{width: "33.3%", textAlign: "center"}}>Buy</a>
            </div>
        </div>
      </div>
      <div className="contentContainer" style={{top: "22rem"}}>
      <div style={{width: "100%"}}>
            <div class="btnBroup" style={{display: "flex", width: "100%", padding: "10px 24px", maxWidth: "43.5rem", marginLeft: "10px", borderRadius: "15px"}}>
                <a style={{width: "33.3%", textAlign: "center"}}>Select Date</a>
                <a style={{width: "33.3%", textAlign: "center"}}>Select Theatre</a>
                <a style={{width: "33.3%", textAlign: "center"}}>Select Time</a>
            </div>
        </div>
      </div>
      <div className="contentContainer" style={{top: "24.5rem"}}>
        <div style={{width: "100%", display: "flex"}}>
            <div class="btnBroup" style={{display: "flex", width: "12rem", border: "0.5px solid white", padding: "10px 24px", marginLeft: "10px", borderRadius: "15px", height: "20px"}}>
                <a style={{width: "90%" ,textAlign: "center"}}>-</a>
                <i className="fas fa-calendar" style={{width: "10%", alignSelf: "center"}}></i>
            </div>
            <div class="btnBroup" style={{display: "flex", width: "12rem", border: "0.5px solid white", padding: "10px 24px", marginLeft: "10px", borderRadius: "15px", height: "20px"}}>
                <a style={{width: "90%" ,textAlign: "center"}}>-</a>
                <i className="fas fa-angle-down" style={{width: "10%", alignSelf: "center"}}></i>
            </div>
            <div class="btnBroup" style={{display: "flex", width: "12rem", border: "0.5px solid white", padding: "10px 24px", marginLeft: "10px", borderRadius: "15px", height: "20px"}}>
                <a style={{width: "90%" ,textAlign: "center"}}>-</a>
                <i className="fas fa-angle-down" style={{width: "10%", alignSelf: "center"}}></i>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
