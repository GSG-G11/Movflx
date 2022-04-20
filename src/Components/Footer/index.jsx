import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './style.css';

const Footer = () => {
  return (
    <>
      <footer className='page-footer'>
        <div className='container'>
          <div className='footer-top'>
            <img src={logo} alt='Movflx' />
          </div>
          <div className='footer-bottom'>
            <div className='row'>
              <div className='quick-link-list'>
                <ul>
                  <li>
                    <Link to='/'>FAQ</Link>
                  </li>
                  <li>
                    <Link to='/'>Help Center</Link>
                  </li>
                  <li>
                    <Link to='/'>Terms of Use</Link>
                  </li>
                  <li>
                    <Link to='/'>Privacy</Link>
                  </li>
                </ul>
              </div>

              <div className='footer-social'>
                <ul>
                  <li>
                    <a
                      href='https://www.facebook.com/imdb/'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='ri-facebook-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://twitter.com/IMDb'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='ri-twitter-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.pinterest.com/imdbofficial/_created/'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='ri-pinterest-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.youtube.com/imdb'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='ri-youtube-fill'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <div className='container'>
            <p className='para'>
              Copyright © 2021. All Rights Reserved By {' '}
              <a
                className='link'
                href='https://github.com/GSG-G11/Movflx'
                target='_blank'
                rel='noreferrer'>
                Movflx
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
