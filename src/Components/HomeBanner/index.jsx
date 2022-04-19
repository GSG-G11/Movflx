import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HomeBanner = () => {
  return (
    <header className="page-header home-header">
      <div className="container">
        <div className="banner-content">
          <h4 className="sub-title">Movflx</h4>
          <h2 className="title">Unlimited {<span>Movie</span>} , TVs Shows, & More.</h2>
          <Link className="btn" to='/#Movies'>
          <i className="ri-arrow-right-line"></i>
            Browse Movies
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HomeBanner;