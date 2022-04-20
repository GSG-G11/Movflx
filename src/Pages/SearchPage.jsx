import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';
import SubBanner from '../Components/SubBanner';
import NoData from '../Components/Search/noData';
import Subscribe from '../Components/Subscribe';
import Pagination from '../Components/Pagination';

const SearchPage = ({currentPage, setCurrentPage, setWatchList, watchList }) => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(
      `https://omdbapi.com/?apikey=7b85d604&s=${query}&page=${currentPage}`,
      {
        signal: signal,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(Math.round(+data.totalResults / 10));
        setSearchResults(
          data.Search
            ? data.Search.filter((movie) => movie.Poster !== 'N/A').slice(0, 8)
            : []
        );
      });

    return () => {
      controller.abort();
    };
  }, [query, currentPage]);

  return (
    <>
      <SubBanner title={'Search Results'} pathName={'Search'} />
      <section className='results-sec'>
        <div className='container'>
          <div className='section-title'>
            <h5 className='sub-title'>ONLINE STREAMING</h5>
            <h2 className='title'>{query}'s Related Results</h2>
          </div>
          <div className='row movies-grid'>
            {searchResults.length ? (
              searchResults.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} setWatchList={setWatchList} watchList={watchList} />
              ))
            ) : (
              <NoData />
            )}
          </div>
          {
            totalPages > 1 &&
            (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )
          }
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default SearchPage;