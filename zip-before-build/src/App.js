import React from 'react';
import './App.css';
import { ScrollToTop } from 'react-router-scroll-to-top';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import NewsSinglePage from './components/NewsSinglePage';
import Faq from './components/Faq';
import History from './components/History';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router history={History}>
        <div className='main'>
          <Header />
          <ScrollToTop>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/blog' component={Blog} />
              <Route path='/faq' component={Faq} />
              <Route path='/news-single-page' component={NewsSinglePage} />
            </Switch>
          </ScrollToTop>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
