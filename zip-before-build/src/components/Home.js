import React from 'react';
import homeCardImg1 from '../images/cards/card-48.png';
import homeCardImg2 from '../images/cards/card-50.png';
import homeCardImg3 from '../images/cards/card-26.png';
import homeCardImg4 from '../images/cards/card-12.png';
import homeCardImg5 from '../images/cards/card-04.png';
import card45 from '../images/cards/card-45.png';
import card34 from '../images/cards/card-34.png';
import card17 from '../images/cards/card-17.png';
import card05 from '../images/cards/card-05.png';
import card29 from '../images/cards/card-29.png';
import luminousPrimary from '../images/primary-figure.svg';
import luminousWarning from '../images/warning-figure.svg';
import luminousDanger from '../images/danger-figure.svg';
import aboutImg from '../images/about-img.svg';
import circleIcon1 from '../images/circle-icon-1.svg';
import circleIcon2 from '../images/circle-icon-2.svg';
import circleIcon3 from '../images/circle-icon-3.svg';
import buyLogo1 from '../images/buy-logo-1.png';
import buyLogo2 from '../images/buy-logo-2.png';
import buyLogo3 from '../images/buy-logo-3.png';
import playIcon from '../images/icons/play-icon.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>

      <section className='section section-home section-bg-dark'>
        <div className='section--luminous-point primary'><img src={luminousPrimary} alt='' /></div>
        <div className='section--luminous-point warning'><img src={luminousWarning} alt='' /></div>
        <div className='section--luminous-point danger'><img src={luminousDanger} alt='' /></div>
        <div className='container'>
          <div className='section-home-content'>
            <h1 className='section-home-title'>
              Mythical Beings
            </h1>
            <h5 className='bigger section-home-subtitle'>
              Mythical Beings is a blockchain based card collection game by Tarasca Art &amp; Games. Every card and creature is unique and has an ancient story. You can collect, buy, exchange, play and make money by playing!
            </h5>
            <a href="#0" className='btn btn-warning text-white m-4'>Buy cards</a>
            <a href="#0" className='btn btn-link text-white btn-video text-decoration-none m-4'>
              <img src={playIcon} alt='' /> 
              Watch video
            </a>
          </div>
          <div className='section-home--card-box'>
            <div className='section-home-card-img'>
              <img src={homeCardImg1} alt='' /> 
            </div>
            <div className='section-home-card-img'>
              <img src={homeCardImg2} alt='' /> 
            </div>
            <div className='section-home-card-img'>
              <img src={homeCardImg3} alt='' /> 
            </div>
            <div className='section-home-card-img'>
              <img src={homeCardImg4} alt='' /> 
            </div>
            <div className='section-home-card-img'>
              <img src={homeCardImg5} alt='' /> 
            </div>
          </div>
        </div>
      </section>
      <section className='section section-about section-bg-light'>
        <div className='container'>
          <div className='section-about-box'>
            <div className='section-about-box--content'>
              <h2 className='section-about-box--title'>
                About the Game
              </h2>
              <p className='section-about-box--text'>
                The main purpose of the players is <strong className='font-italic'>to complete the collection</strong>, gathering all the creatures in their account. There are <strong className='font-italic'>50 creatures, 10 from each continent</strong>. All cards divided into three groups: <strong className='font-italic'>common, rare and epic</strong> (the most difficult).
              </p>
              <p className='section-about-box--text'>
                To get the cards you can <strong className='font-italic'>buy packs of 3 random cards</strong> (at the price of € 2) or to buy them from other users. If you have repeated cards, <strong className='font-italic'>you can exchange them with other users and make money on trading</strong>, collecting the Jackpot or earning passive dividend income by owning Tarasca Mythical Being Card. See more rules and details about Tarasca cards on our FAQ page.
              </p>
              <Link to='/faq' className='btn btn-light'>
                See FAQ
              </Link>
            </div>
            <div className='section-about-box--img'>
              <img src={aboutImg} alt='' /> 
            </div>
          </div>
        </div>
      </section>
      <section className='section section-start-collection section-bg-dark'>
        <div className='section--luminous-point primary'><img src={luminousPrimary} alt='' /></div>
        <div className='section--luminous-point warning'><img src={luminousWarning} alt='' /></div>
        <div className='section--luminous-point danger'><img src={luminousDanger} alt='' /></div>
        <div className='container'>
          <h2 className='bigger section--title text-center'>
            Start Your Collection
          </h2>
          <h5 className='bigger section--subtitle text-center'>
            The complete collection consists of 50 creatures, 10 from each continent. <br className='d-none d-md-block' /> However, only 30 of them are available from the beginning, and 3 more will be <br className='d-none d-md-block' /> included each month until they reach 50.
          </h5>
          <div className='card-collection--container'>
            <Link to='/' className='card-collection--item'>
              <div className='card-collection--item-header'>
                <div className='card-collection--item-image'>
                  <img src={card45} alt='' />
                </div>
              </div>
              <h5 className='bigger card-collection--item-text'>
                Europa
              </h5>
            </Link>
            <Link to='/' className='card-collection--item'>
              <div className='card-collection--item-header'>
                <div className='card-collection--item-image'>
                  <img src={card34} alt='' />
                </div>
              </div>
              <h5 className='bigger card-collection--item-text'>
                Africa
              </h5>
            </Link>
            <Link to='/' className='card-collection--item'>
              <div className='card-collection--item-header'>
                <div className='card-collection--item-image'>
                  <img src={card17} alt='' />
                </div>
              </div>
              <h5 className='bigger card-collection--item-text'>
                Oceania
              </h5>
            </Link>
            <Link to='/' className='card-collection--item'>
              <div className='card-collection--item-header'>
                <div className='card-collection--item-image'>
                  <img src={card05} alt='alt-text' />
                </div>
              </div>
              <h5 className='bigger card-collection--item-text'>
                Asia
              </h5>
            </Link>
            <Link to='/' className='card-collection--item'>
              <div className='card-collection--item-header'>
                <div className='card-collection--item-image'>
                  <img src={card29} alt='' />
                </div>
              </div>
              <h5 className='bigger card-collection--item-text'>
                America
              </h5>
            </Link>
          </div>
          <div className='subsection-start-collection'>
            <div className='section--luminous-point primary'><img src={luminousPrimary} alt='' /></div>
            <div className='section--luminous-point warning'><img src={luminousWarning} alt='' /></div>
            <div className='section--luminous-point danger'><img src={luminousDanger} alt='' /></div>
            <h3 className='text-center subsection-start-collection--title'>
              Discover legendary creatures all over <br className='d-none d-md-block' /> the world and collect them all!
            </h3>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='subsection-start-collection--card'>
                <img src={luminousWarning} alt='' />
                <span>50</span>
                <h5 className='m-0'>Unique creatures</h5>
              </div>
              <div className='subsection-start-collection--card'>
                <img src={luminousPrimary} alt='' />
                <span>10</span>
                <h5 className='m-0'>Creatures per continent</h5>
              </div>
              <div className='subsection-start-collection--card'>
                <img src={luminousDanger} alt='' />
                <span>3</span>
                <h5 className='m-0'>Cards per pack</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section-how-buy section-bg-light'>
        <div className='section--luminous-point primary'><img src={luminousPrimary} alt='' /></div>
        <div className='section--luminous-point warning'><img src={luminousWarning} alt='' /></div>
        <div className='section--luminous-point danger'><img src={luminousDanger} alt='' /></div>
        <div className='container'>
          <h2 className='bigger section-how-buy--title text-center text-dark'>
            How To Buy, Exchange <br className='d-none d-md-block' /> and Craft Cards
          </h2>
          <h5 className='bigger section-how-buy--subtitle text-center text-dark'>
            There are three main ways.
          </h5>
          <div className='section-how-buy--card-container'>
            <a href='#0' className='section-how-buy--card'>
              <div className='section-how-buy--card-front'>
                <div className='section-how-buy--card-img'>
                  <img src={circleIcon1} alt='' />
                </div>
                <h4 className='bigger section-how-buy--card-title'>
                  Buy a pack of cards from Tarasca
                </h4>
                <div className='icon-plus'>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className='section-how-buy--card-back'>
                <div className='section-how-buy--card-text'>
                  <p>
                    Buy cards from other users who will normally put their repeated cards on sale. If you have repeated cards at your own, you may exchange them with other users, to get the missing cards.
                  </p>
                  <p>
                    To do this, click on the 'trade' button of the card, and the market page of that card will open to you. If you want to accept the best Bid, just create an Ask for the same price. If it seems too low, you can place a Ask for a higher price and wait for another user to accept it. You can always read more about buying and trading here on FAQ page.
                  </p>
                </div>
              </div>
            </a>
            <a href='#0' className='section-how-buy--card'>
              <div className='section-how-buy--card-front'>
                <div className='section-how-buy--card-img'>
                  <img src={circleIcon2} alt='' />
                </div>
                <h4 className='bigger section-how-buy--card-title'>
                  Buy and exchange cards from other users
                </h4>
                <div className='icon-plus'>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className='section-how-buy--card-back'>
                <div className='section-how-buy--card-text'>
                  <p>
                    2Buy cards from other users who will normally put their repeated cards on sale. If you have repeated cards at your own, you may exchange them with other users, to get the missing cards.
                  </p>
                  <p>
                    To do this, click on the 'trade' button of the card, and the market page of that card will open to you. If you want to accept the best Bid, just create an Ask for the same price. If it seems too low, you can place a Ask for a higher price and wait for another user to accept it. You can always read more about buying and trading here on FAQ page.
                  </p>
                </div>
              </div>
            </a>
            <a href='#0' className='section-how-buy--card'>
              <div className='section-how-buy--card-front'>
                <div className='section-how-buy--card-img'>
                  <img src={circleIcon3} alt='' />
                </div>
                <h4 className='bigger section-how-buy--card-title'>
                  Craft cards from your existing cards
                </h4>
                <div className='icon-plus'>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className='section-how-buy--card-back'>
                <div className='section-how-buy--card-text'>
                  <p>
                    3Buy cards from other users who will normally put their repeated cards on sale. If you have repeated cards at your own, you may exchange them with other users, to get the missing cards.
                  </p>
                  <p>
                    To do this, click on the 'trade' button of the card, and the market page of that card will open to you. If you want to accept the best Bid, just create an Ask for the same price. If it seems too low, you can place a Ask for a higher price and wait for another user to accept it. You can always read more about buying and trading here on FAQ page.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className='text-center'>
            <a href='#0' className='btn btn-warning text-white'>
              My cards
            </a>
          </div>
        </div>
      </section>
      <section className='section section-subscribe section-bg-dark'>
        <div className='section--luminous-point primary'><img src={luminousPrimary} alt='' /></div>
        <div className='section--luminous-point warning'><img src={luminousWarning} alt='' /></div>
        <div className='section--luminous-point danger'><img src={luminousDanger} alt='' /></div>
        <div className='container'>
          <div className='crypto-card-container'>
            <Link to='/' className='crypto-card'>
              <div className='crypto-card-logo'>
                <img src={buyLogo1} alt='' />
              </div>
              <h4 className='crypto-card-title'>
                Buy and exchange <br /> cards from other users
              </h4>
              <h5 className='crypto-card-subtitle'>
                CoinPost for CoinPost
              </h5>
            </Link>
            <Link to='/' className='crypto-card'>
              <div className='crypto-card-logo'>
                <img src={buyLogo2} alt='' style={{maxWidth: '119px'}} />
              </div>
              <h4 className='crypto-card-title'>
                Buy and exchange <br /> cards from other users
              </h4>
              <h5 className='crypto-card-subtitle'>
                ZyCrypto for ZyCrypto
              </h5>
            </Link>
            <Link to='/' className='crypto-card'>
              <div className='crypto-card-logo'>
                <img src={buyLogo3} alt='' style={{maxWidth: '59px'}}  />
              </div>
              <h4 className='crypto-card-title'>
                Buy and exchange <br /> cards from other users
              </h4>
              <h5 className='crypto-card-subtitle'>
                BTCManager for BTCManager
              </h5>
            </Link>
          </div>
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

export default Home;
