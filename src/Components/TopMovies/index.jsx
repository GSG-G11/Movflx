import React from 'react';
import './style.css';

const TopMovies = ({ filterCtg, setFilterCtg, topMovies }) => {
  const handleFilterCtg = (e) => {
    setFilterCtg(e.target.textContent);
  };

  return (
    <section className='new-sec top-rated-sec' id='Movies'>
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
              filterCtg === 'Romance'
                ? 'btn category-btn active'
                : 'btn category-btn'
            }
            onClick={(e) => handleFilterCtg(e)}>
            Romance
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
        <div className='row'>
          {
          topMovies
          ?
          topMovies.map(movie => (
            <h1>{movie.Title}</h1>
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
