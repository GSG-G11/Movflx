import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';
import SubBanner from '../Components/SubBanner';
import NoData from '../Components/Search/noData';
import Subscribe from '../Components/Subscribe';

const SearchPage = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  // const [totalPages, setTotalPages] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);

  console.log(query);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://omdbapi.com/?apikey=7b85d604&s=${query}`, {
      signal: signal
    })
    .then(res => res.json())
    .then(data => {
      // setTotalPages(data.totalResults / 10);
      setSearchResults(data.Search ? data.Search.filter(movie => movie.Poster !== 'N/A').slice(0, 8) : []);
    })

    return () => {
      controller.abort();
    }
  }, [query]);

  return (
    <>
      <SubBanner title={'Search Results'} pathName={'Search'} />
      <section className='results-sec'>
        <div className='container'>
          <div className='section-title'>
            <h5 className="sub-title">ONLINE STREAMING</h5>
            <h2 className='title'>{query} Results</h2>
          </div>
          <div className='row movies-grid'>
            {searchResults.length ? (
              searchResults.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))
            ) : (
              <NoData />
            )}
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
}

export default SearchPage;