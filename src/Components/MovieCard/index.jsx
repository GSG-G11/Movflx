import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MovieCard = ({ movie, setWatchList, watchList }) => {
  const watchListIds = watchList.map((item) => item.imdbID);

  const addToFavourite = (movie) => {
    if (watchListIds.includes(movie.imdbID)) {
      alert('Movie already added to your watchlist');
    } else {
      setWatchList([...watchList, movie]);
    }
  };

  const deleteFromWatchList = (id) => {
    const newWatchList = watchList.filter((item) => item.imdbID !== id);
    setWatchList(newWatchList);
  }

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));

    return () => {
      localStorage.setItem('watchList', JSON.stringify(watchList));
    };
  }, [watchList]);

  return (
    <div className='single-movie'>
      <div className='movie-poster'>
        <img src={movie.Poster} alt='movie-poster' />
        <ul className='overlay-btns'>
          {watchListIds.includes(movie.imdbID) ? 
            (<li>
              <button
                className='btn watch-btn'
                onClick={() => deleteFromWatchList(movie.imdbID)}>
                Delete From Watch
              </button>
            </li>
            )
            :
            (
            <li>
              <button
                className='btn watch-btn'
                onClick={() => addToFavourite(movie)}>
                Watch Later
              </button>
            </li>
          )}
          <li>
            <Link className='btn details-btn' to={`/movie/${movie.imdbID}`}>
              Details
            </Link>
          </li>
        </ul>
      </div>
      <div className='movie-content'>
        <div className='top row'>
          <h5 className='title'>
            <Link className='link' to={`/movie/${movie.imdbID}`}>
              {movie.Title.length > 20
                ? movie.Title.split('').slice(0, 20).join('') + '...'
                : movie.Title}
            </Link>
          </h5>
          <h6 className='year'>{movie.Year}</h6>
        </div>
        <div className='bottom row'>
          <span className='quality'>HD</span>
          <span className='type'>{movie.Type}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
