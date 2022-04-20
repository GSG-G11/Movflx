import React from 'react';
import './style.css';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className='pagination'>
      <ul className='pagination-list'>
        <li className='pagination-item'>
          <button
            className={
              currentPage === 1
                ? 'btn pagination-btn disabled'
                : 'btn pagination-btn'
            }
            onClick={() => setCurrentPage((prev) => prev - 1)}
            >
            <i className='fas fa-angle-left'></i>
            Prev
          </button>
        </li>
        {pages.slice(0, 4).map((page) => (
          <li key={page} className='pagination-item'>
            <button
              className={
                currentPage === page
                  ? 'btn pagination-btn active'
                  : 'btn pagination-btn'
              }
              onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          </li>
        ))}
        <li className='pagination-item'>
          <button
            className={
              currentPage === pages.slice(0, 4).length
                ? 'btn pagination-btn disabled'
                : 'btn pagination-btn'
            }
            onClick={() => setCurrentPage((prev) => prev + 1)}
            >
            Next
            <i className='fas fa-angle-left'></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
