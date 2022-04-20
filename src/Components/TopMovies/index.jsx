import React from 'react';
import MovieCard from '../MovieCard';
import './style.css';

const TopMovies = ({ filterCtg, setFilterCtg, topMovies, setWatchList,watchList }) => {
  const handleFilterCtg = (e) => {
    setFilterCtg(e.target.textContent);
  };

  return (
    <section className='new-sec top-rated-sec' id='movies'>
      <div className='container'>
        <div className='section-title'>
          <h5 className='sub-title'>ONLINE STREAMING</h5>
          <h2 className='title'>Top Rated Movies</h2>
        </div>
        <div className='btns-div categories-btns'>
          <button
            className={
              filterCtg === 'Action'
                ? 'btn category-btn active'
                : 'btn category-btn'
            }
            onClick={(e) => handleFilterCtg(e)}>
            Action
          </button>
          <button
            className={
              filterCtg === 'Comedy'
                ? 'btn category-btn active'
                : 'btn category-btn'
            }
            onClick={(e) => handleFilterCtg(e)}>
            Comedy
          </button>
          <button
            className={
              filterCtg === 'Western'
                ? 'btn category-btn active'
                : 'btn category-btn'
            }
            onClick={(e) => handleFilterCtg(e)}>
            Western
          </button>
          <button
            className={
              filterCtg === 'Horror'
                ? 'btn category-btn active'
                : 'btn category-btn'
            }
            onClick={(e) => handleFilterCtg(e)}>
            Horror
          </button>
        </div>
        <div className='row movies-grid'>
          {
          topMovies
          ?
          topMovies.map(movie => (
            <MovieCard movie={movie} key={movie.imdbID} setWatchList={setWatchList} watchList={watchList} />
          ))
          :
          null
          }
        </div>
      </div>
    </section>
  );
};

export default TopMovies;
