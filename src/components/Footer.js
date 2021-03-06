import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../images/footer-logo.svg';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='text-center d-block d-md-none mb-5'>
            <a className="navbar-brand navbar-brand-center" href="#0">
              <img src={footerLogo} alt="logo-footer" />
            </a>
          </div>
          <nav className="custom-navbar navbar navbar-dark bg-dark">
            <ul className="nav mx-auto ml-sm-auto">
              <li className="nav-item">
                <Link to='/' className='nav-link'>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className='nav-link'>
                  How to play
                </Link>
              </li>
            </ul>
            <a className="navbar-brand navbar-brand-center d-none d-md-inline-block" href="#0">
              <img src={footerLogo} alt="logo-footer" />
            </a>
            <ul className="nav mx-auto mr-sm-auto">
              <li className="nav-item">
                <Link to='/Blog' className='nav-link'>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className='nav-link btn btn-outline-warning'>
                  Login
                </Link>
              </li>
            </ul>
          </nav>
          <p className='copyright'>All rights reserved, 2021</p>
        </div>
      </footer>
    </>
  )};


export default Footer;