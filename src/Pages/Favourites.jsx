import React from 'react'
import SubBanner from '../Components/SubBanner';
import Subscribe from '../Components/Subscribe';

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
            
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  )
}

export default Favourites;