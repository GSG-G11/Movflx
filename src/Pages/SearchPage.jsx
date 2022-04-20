import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';
import NoData from '../Components/Search/noData';
import Subscribe from '../Components/Subscribe';

const SearchPage = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  console.log(query);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://omdbapi.com/?apikey=7b85d604&s=${query}`, {
      signal: signal
    })
    .then(res => res.json())
    .then(data => {
      setSearchResults(data.Search ? data.Search.filter(movie => movie.Poster !== 'N/A').slice(0, 8) : []);
    })

    return () => {
      controller.abort();
    }
  }, [query]);


  console.log(searchResults);

  return (
    <>
      <header className="page-header">
        <div className="container">
          Header
        </div>
      </header>
      <section className="results-sec">
        <div className="container">
          <div className='row movies-grid'>
            {
            searchResults.length
            ?
            searchResults.map(movie => (
              <MovieCard movie={movie} key={movie.imdbID} />
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

export default SearchPage;