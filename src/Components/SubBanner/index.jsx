import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const SubBanner = ({title, pathName}) => {
  return (
    <header className="page-header sub-banner">
      <div className="container">
        <div className="banner-content">
          <h2 className="title">{title}</h2>
          <ul className="breadcrumb">
            <li><Link to="/">Home</Link></li>
            <li><span>{pathName}</span></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default SubBanner;