import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const MovieCard = ({movie}) => {
  return (
    <div className="single-movie">
      <div className="movie-poster">
        <Link className='link' to={`/movie/${movie.imdbID}`}>
          <img src={movie.Poster} alt="movie-poster" />
        </Link>
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