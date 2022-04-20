import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const MovieCard = ({movie}) => {
  return (
    <div className="single-movie">
      <div className="movie-poster">
        <img src={movie.Poster} alt="movie-poster" />
        <ul className="overlay-btns">
          <li>
            <button className="btn watch-btn">Watch Later</button>
          </li>
          <li>
            <Link className="btn details-btn" to={`/movie/${movie.imdbID}`}>Details</Link>
          </li>
        </ul>
      </div>
      <div className="movie-content">
        <div className="top row">
          <h5 className="title">
            <Link className='link' to={`/movie/${movie.imdbID}`}>
              {movie.Title.length > 20 ? movie.Title.split('').slice(0, 20).join('') + '...' : movie.Title}
            </Link>
          </h5>
          <h6 className="year">{movie.Year}</h6>
        </div>
        <div className="bottom row">
          <span className="quality">HD</span>
          <span className="type">{movie.Type}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;