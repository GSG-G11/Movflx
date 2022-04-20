import React from 'react'
import MovieCard from '../Components/MovieCard';
import SubBanner from '../Components/SubBanner';
import Subscribe from '../Components/Subscribe';
import NoData from '../Components/Search/noData';

const Favourites = ({watchList, setWatchList}) => {
  return (
    <>
      <SubBanner title={'My Favourites'} pathName={'Favourites'} />
      <section className='results-sec'>
        <div className='container'>
          <div className='section-title'>
            <h5 className='sub-title'>ONLINE STREAMING</h5>
            <h2 className='title'>my watch List</h2>
          </div>
          <div className='row movies-grid'>
          {
          watchList.length
          ?
          watchList.map(movie => (
            <MovieCard movie={movie} key={movie.imdbID} setWatchList={setWatchList} watchList={watchList} />
          ))
          :
          <NoData />
          }
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  )
}

export default Favourites;