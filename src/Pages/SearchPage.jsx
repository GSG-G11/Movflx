import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';
import SubBanner from '../Components/SubBanner';
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
      <SubBanner title={'Search Results'} pathName={'Search'} />
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
            <h2>No results found</h2>
            }
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  )
}

export default SearchPage;