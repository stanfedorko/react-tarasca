import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/logo.svg';


const Header = () => {
  return (
    <>
      <header>
        <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark">
          <Link to='/' className='navbar-brand d-inline-block d-md-none'>
            <img src={headerLogo} alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
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
            <Link to='/' className='navbar-brand navbar-brand-center d-none d-md-inline-block'>
              <img src={headerLogo} alt="logo" />
            </Link>
            <ul className="navbar-nav mr-auto">
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
          </div>
        </nav>
      </header>
    </>
  )};


export default Header;