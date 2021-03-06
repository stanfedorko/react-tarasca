import React from 'react';
import card50 from '../images/cards/card-50.png';
import card04 from '../images/cards/card-04.png';
import card12 from '../images/cards/card-12.png';
import card48 from '../images/cards/card-48.png';
import card17 from '../images/cards/card-17.png';
import card05 from '../images/cards/card-05.png';
import luminousPrimary from '../images/primary-figure.svg';
import luminousWarning from '../images/warning-figure.svg';
import luminousDanger from '../images/danger-figure.svg';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>

      <section className='section section-news section-bg-dark'>
        <div className='section--luminous-point primary'><img src={luminousPrimary} alt='' /></div>
        <div className='section--luminous-point warning'><img src={luminousWarning} alt='' /></div>
        <div className='section--luminous-point danger'><img src={luminousDanger} alt='' /></div>
        <div className='container'>
          <div className='section-home-content mw-100'>
            <h1 className='section-home-title mb-5 pb-2'>
              News and Updates
            </h1>
          </div>
          <div className='row'>
            <div className='col-sm-6 col-lg-4'>
              <Link to='/news-single-page' className='news-card'>
                <div className='news-card-img'>
                  <img src={card50} alt='' /> 
                </div>
                <p className='news-card-date'>
                  Dec 12, 2020
                </p>
                <h5 className='bigger news-card-title'>
                  Introducing: Fancy Variant Badges
                </h5>
                <p className='bigger news-card-text'>
                  The main purpose of the players is to <br /> complete the collection, gathering all the...
                </p>
              </Link>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <Link to='/news-single-page' className='news-card'>
                <div className='news-card-img'>
                  <img src={card04} alt='' /> 
                </div>
                <p className='news-card-date'>
                  Dec 12, 2020
                </p>
                <h5 className='bigger news-card-title'>
                  Koshkat by Momo Wang
                </h5>
                <p className='bigger news-card-text'>
                  The main purpose of the players is to <br /> complete the collection, gathering all the...
                </p>
              </Link>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <Link to='/news-single-page' className='news-card'>
                <div className='news-card-img'>
                  <img src={card12} alt='' /> 
                </div>
                <p className='news-card-date'>
                  Dec 12, 2020
                </p>
                <h5 className='bigger news-card-title'>
                  CryptoKitties x Blocklete Games
                </h5>
                <p className='bigger news-card-text'>
                  The main purpose of the players is to <br /> complete the collection, gathering all the...
                </p>
              </Link>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <Link to='/news-single-page' className='news-card'>
                <div className='news-card-img'>
                  <img src={card48} alt='' /> 
                </div>
                <p className='news-card-date'>
                  Dec 12, 2020
                </p>
                <h5 className='bigger news-card-title'>
                  Introducing: Fancy Variant Badges
                </h5>
                <p className='bigger news-card-text'>
                  The main purpose of the players is to <br /> complete the collection, gathering all the...
                </p>
              </Link>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <Link to='/news-single-page' className='news-card'>
                <div className='news-card-img'>
                  <img src={card17} alt='' /> 
                </div>
                <p className='news-card-date'>
                  Dec 12, 2020
                </p>
                <h5 className='bigger news-card-title'>
                  Introducing: Fancy Variant Badges
                </h5>
                <p className='bigger news-card-text'>
                  The main purpose of the players is to <br /> complete the collection, gathering all the...
                </p>
              </Link>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <Link to='/news-single-page' className='news-card'>
                <div className='news-card-img'>
                  <img src={card05} alt='' /> 
                </div>
                <p className='news-card-date'>
                  Dec 12, 2020
                </p>
                <h5 className='bigger news-card-title'>
                  Introducing: Fancy Variant Badges
                </h5>
                <p className='bigger news-card-text'>
                  The main purpose of the players is to <br /> complete the collection, gathering all the...
                </p>
              </Link>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <Link to='/news-single-page' className='news-card'>
                <div className='news-card-img'>
                  <img src={card04} alt='' /> 
                </div>
                <p className='news-card-date'>
                  Dec 12, 2020
                </p>
                <h5 className='bigger news-card-title'>
                  Introducing: Fancy Variant Badges
                </h5>
                <p className='bigger news-card-text'>
                  The main purpose of the players is to <br /> complete the collection, gathering all the...
                </p>
              </Link>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <Link to='/news-single-page' className='news-card'>
                <div className='news-card-img'>
                  <img src={card50} alt='' /> 
                </div>
                <p className='news-card-date'>
                  Dec 12, 2020
                </p>
                <h5 className='bigger news-card-title'>
                  Introducing: Fancy Variant Badges
                </h5>
                <p className='bigger news-card-text'>
                  The main purpose of the players is to <br /> complete the collection, gathering all the...
                </p>
              </Link>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <Link to='/news-single-page' className='news-card'>
                <div className='news-card-img'>
                  <img src={card12} alt='' /> 
                </div>
                <p className='news-card-date'>
                  Dec 12, 2020
                </p>
                <h5 className='bigger news-card-title'>
                  Introducing: Fancy Variant Badges
                </h5>
                <p className='bigger news-card-text'>
                  The main purpose of the players is to <br /> complete the collection, gathering all the...
                </p>
              </Link>
            </div>
          </div>
          <nav aria-label="News pagination">
            <ul className="pagination pagination-lg">
              <li className="page-item"><a className="page-link" href="#0">1</a></li>
              <li className="page-item active" aria-current="page"><a className="page-link" href="#0">2</a></li>
              <li className="page-item disabled"><a className="page-link" href="#0">3</a></li>
              <li className="page-item"><a className="page-link" href="#0">4</a></li>
              <li className="page-item disabled dots"><a className="page-link" href="#0">...</a></li>
              <li className="page-item"><a className="page-link" href="#0">10</a></li>
            </ul>
          </nav>
        </div>
      </section>
      <section className='section section-subscribe section-bg-dark'>
        <div className='section--luminous-point primary'><img src={luminousPrimary} alt='' /></div>
        <div className='section--luminous-point danger'><img src={luminousDanger} alt='' /></div>
        <div className='container'>
          <h2 className='bigger section-subscribe-title text-center'>
            Newsletter
          </h2>
          <h5 className='bigger section-subscribe-subtitle text-center'>
            Subscribe and get our latest news and updastes.
          </h5>
          <form className="form-subscribe">
            <input type="text" className="form-control" placeholder="Name" />
            <input type="email" className="form-control" placeholder="Email" aria-describedby="emailHelp" />
            <button type="submit" className="btn btn-primary mb-2">Subscribe</button>
          </form>
        </div>
      </section>

    </>
  );
};

export default Blog;
