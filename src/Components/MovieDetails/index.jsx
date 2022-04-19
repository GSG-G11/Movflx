import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState('');
  let lastWord = movie ? movie.Title.split(' ').pop() : '';

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://omdbapi.com/?apikey=7b85d604&i=${id}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <header className='page-header movie-details-header'>
      <div className='container'>
        {movie.Title ? (
          <div className='movie-details'>
            <div className='movie-poster'>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className='details-content'>
              {movie.Director ? (
                <h5 className='director'>{movie.Director.split(',')[0]}</h5>
              ) : null}
              <h2 className='title'>{movie.Title.split(' ').slice(0, -1).join(' ')} <span>{lastWord}</span></h2>
              <div className='banner-meta'>
                <ul>
                  <li className='vid'>
                    <span className='type'>{movie.Type}</span>
                    <span className='quality'>HD</span>
                  </li>
                  <li className='category'>
                    <span>{movie.Genre.split(',').slice(0, 2).join(', ')}</span>
                  </li>
                  <li className='time'>
                    <span>
                      <i className='ri-calendar-2-line'></i>
                      {movie.Year}
                    </span>
                    <span>
                      <i className='ri-time-line'></i>
                      {movie.Runtime}
                    </span>
                  </li>
                </ul>
              </div>
              <p className='desc'>{movie.Plot}</p>
              <a
                className='btn watch-btn'
                href={`https://www.imdb.com/title/${id}`}
                target='_blank'
                rel='noreferrer'>
                <i className="ri-play-fill"></i>
                Watch Now 
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default MovieDetails;
