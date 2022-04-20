import React, { useEffect, useState } from 'react'
import HomeBanner from '../Components/HomeBanner';
import Subscribe from '../Components/Subscribe';
import TopMovies from '../Components/TopMovies';

const Home = () => {
  const [filterCtg, setFilterCtg] = useState('Action');
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://omdbapi.com/?apikey=7b85d604&s=${filterCtg}`, {
      signal: signal
    })
    .then(res => res.json())
    .then(data => {
      setTopMovies(data.Search.slice(0, 8));
    })

    return () => {
      controller.abort();
    }
  }, [filterCtg])

  return (
    <>
      <HomeBanner />
      <TopMovies filterCtg={filterCtg} setFilterCtg={setFilterCtg} topMovies={topMovies} />
      <Subscribe />
    </>
  )
}

export default Home;