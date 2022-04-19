import { Link } from 'react-router-dom';
import React from 'react';
import logo from './logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <div className="navbar-brand">
            <Link className="navbar-item link" to="/">
              <img src={logo} alt="Movflx" />
            </Link>
          </div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link className="navbar-link" to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/">Movies</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/">Subscribe</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/">Search</Link>
            </li>
          </ul>
          <div className="right-btns">
            <Link className="navbar-link" to="/favourites">
              <i className="ri-heart-2-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;