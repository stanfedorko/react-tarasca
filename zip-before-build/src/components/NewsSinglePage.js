import React from 'react';
import card50 from '../images/cards/card-50.png';
import luminousPrimary from '../images/primary-figure.svg';
import luminousWarning from '../images/warning-figure.svg';
import luminousDanger from '../images/danger-figure.svg';

const NewsSinglePage = () => {
  return (
    <>

      <section className='section section-news section-bg-dark'>
        <div className='section--luminous-point primary'><img src={luminousPrimary} alt='' /></div>
        <div className='section--luminous-point warning'><img src={luminousWarning} alt='' /></div>
        <div className='section--luminous-point danger'><img src={luminousDanger} alt='' /></div>
        <div className='container'>
          <div className='single-news-content'>
            <div className='single-news-img'>
              <img src={card50} alt='' /> 
            </div>
            <h2 className='single-news-title'>
              Fancy Variant Badges
            </h2>
            <p className='single-news-date'>
              Dec 12, 2020
            </p>
            <p className='bigger single-news-text'>
              Qui voluptate anim nulla aute enim. Labore culpa mollit minim deserunt ex do nulla do officia cupidatat laborum nulla. Nisi veniam quis laborum tempor commodo do ea sint. Minim aliquip voluptate tempor minim consequat aute commodo laborum dolore officia officia dolore.
            </p>
            <p className='bigger single-news-text'>
              Qui elit pariatur pariatur est sit. Nisi cupidatat cillum labore elit eu sunt officia ad deserunt anim consequat sunt et laborum. Nostrud esse dolor enim nulla occaecat anim.
            </p>
            <p className='bigger single-news-text'>
              In sint mollit pariatur nostrud dolor aliqua dolore quis laborum labore ipsum aliqua eu. Magna nulla consequat labore occaecat est enim Lorem ea ullamco duis mollit. Fugiat pariatur nulla cupidatat fugiat sint velit occaecat. Est dolore est in ad ex reprehenderit fugiat occaecat exercitation enim laboris sit adipisicing. Pariatur officia id duis culpa magna aute sit nisi et incididunt. Reprehenderit ut aliqua incididunt laboris et officia sunt elit deserunt est.
            </p>
            <p className='bigger single-news-text'>
              Irure aliqua excepteur et id quis. Est est ad eu ea nostrud cupidatat cupidatat ullamco dolore esse consectetur ut ut. Minim est consectetur sit ex reprehenderit occaecat sit nostrud sint do cupidatat tempor consectetur duis. Dolor nulla consequat qui laboris.
            </p>
            <p className='bigger single-news-text'>
              Minim anim proident pariatur voluptate ad aute officia exercitation mollit veniam. Nulla aute id proident aute proident dolore. Quis deserunt ad proident irure dolor eu cillum Lorem commodo qui. Magna quis quis excepteur eu exercitation labore ipsum proident qui quis.
            </p>
          </div>
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

export default NewsSinglePage;
