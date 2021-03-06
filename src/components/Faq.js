import React from 'react';
import luminousPrimary from '../images/primary-figure.svg';
import luminousWarning from '../images/warning-figure.svg';
import luminousDanger from '../images/danger-figure.svg';
import faqBoxImg from '../images/faq-box-img.png';

const Faq = () => {
  return (
    <>

      <section className='section section-faq section-bg-dark'>
        <div className='section--luminous-point primary'><img src={luminousPrimary} alt='' /></div>
        <div className='section--luminous-point warning'><img src={luminousWarning} alt='' /></div>
        <div className='section--luminous-point danger'><img src={luminousDanger} alt='' /></div>
        <div className='container'>
          <div className='section-faq-box'>
            <h1 className='section-faq-title'>
              Frequently <br /> Asked <br /> Questions
            </h1>
            <img className='section-faq-img' src={faqBoxImg} alt='' />
          </div>

          <div className="accordion accordion-main" id="accordionMainOne">
            <div className="card accordion-main-card">
              <div className="card-header" id="headingMainOne">
                <h4 className="bigger fw-700 mb-0">
                  <button className="btn btn-link accordion-main--btn-link btn-block text-left " type="button" data-toggle="collapse" data-target="#collapseMainOne" aria-expanded="true" aria-controls="collapseMainOne">
                    General
                  </button>
                </h4>
              </div>
              <div id="collapseMainOne" className="collapse show" aria-labelledby="headingMainOne" data-parent="#accordionMainOne">
                <div className="accordion accordion-secondary" id="accordionSecondaryOne">
                  <div className="card">
                    <div className="card-header" id="headingSecondaryOne">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondaryOne" aria-expanded="true" aria-controls="collapseSecondaryOne">
                          What’s the game about?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondaryOne" className="collapse" aria-labelledby="headingSecondaryOne" data-parent="#accordionSecondaryOne">
                      <div className="card-body">
                        Lorem anim adipisicing pariatur consectetur sint magna eiusmod mollit et amet pariatur sint nulla. Consectetur ex occaecat irure laboris elit enim qui. Laboris sunt laboris ad nulla do aliqua officia proident esse tempor. Cillum laborum aute incididunt nulla exercitation do qui dolore. Sint duis in sint in duis in pariatur velit aliqua nulla aute.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondaryTwo">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondaryTwo" aria-expanded="false" aria-controls="collapseSecondaryTwo">
                          How many creatures are there?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondaryTwo" className="collapse" aria-labelledby="headingSecondaryTwo" data-parent="#accordionSecondaryOne">
                      <div className="card-body">
                        The complete collection consists of 50 creatures, 10 from each continent. However, only 30 of them are available from the beginning, and 3 more will be included each month until they reach 50.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondaryThree">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondaryThree" aria-expanded="false" aria-controls="collapseSecondaryThree">
                          How can I get the cards?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondaryThree" className="collapse" aria-labelledby="headingSecondaryThree" data-parent="#accordionSecondaryOne">
                      <div className="card-body">
                        Do veniam veniam dolore proident consequat sit irure enim. Dolor anim in officia dolor ipsum nostrud et enim Lorem. Commodo pariatur adipisicing fugiat nisi. Deserunt non culpa cillum anim incididunt pariatur laborum consectetur excepteur qui ullamco enim excepteur laborum.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondaryFour">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondaryFour" aria-expanded="false" aria-controls="collapseSecondaryFour">
                          Are all creatures equally easy to get?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondaryFour" className="collapse" aria-labelledby="headingSecondaryFour" data-parent="#accordionSecondaryOne">
                      <div className="card-body">
                        Ea anim incididunt mollit excepteur consequat cillum velit nisi ea id. Culpa amet ea ea proident deserunt magna ad sit ut ullamco. Magna pariatur excepteur laborum sint ut quis sit ea minim excepteur. Culpa consectetur laboris velit veniam excepteur nulla nulla anim consectetur eu laboris. Reprehenderit deserunt enim Lorem eiusmod mollit pariatur ad irure deserunt nisi ullamco consectetur labore. Proident sit id commodo aute id elit proident. Eiusmod cillum esse aute esse aliquip nulla eu.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondaryFive">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondaryFive" aria-expanded="false" aria-controls="collapseSecondaryFive">
                          Are these creatures real or not?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondaryFive" className="collapse" aria-labelledby="headingSecondaryFive" data-parent="#accordionSecondaryOne">
                      <div className="card-body">
                        Culpa consequat consectetur aute esse nostrud adipisicing excepteur adipisicing pariatur ex labore esse. Laboris non ad occaecat cillum id do est ullamco ea esse magna enim elit velit. Eu veniam dolore consectetur fugiat non nostrud. Aliqua sunt aliquip est mollit incididunt ipsum adipisicing ad sit laborum labore mollit ut. Consequat ad do adipisicing excepteur cillum non consectetur labore ex nulla.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card accordion-main-card">
              <div className="card-header" id="headingMainTwo">
                <h4 className="bigger fw-700 mb-0">
                  <button className="btn btn-link accordion-main--btn-link btn-block collapsed text-left " type="button" data-toggle="collapse" data-target="#collapseMainTwo" aria-expanded="true" aria-controls="collapseMainTwo">
                    Registration and Login
                  </button>
                </h4>
              </div>
              <div id="collapseMainTwo" className="collapse" aria-labelledby="headingMainTwo" data-parent="#accordionMainOne">
                <div className="accordion accordion-secondary" id="accordionSecondaryTwo">
                  <div className="card">
                    <div className="card-header" id="headingSecondary-2-1">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-2-1" aria-expanded="true" aria-controls="collapseSecondary-2-1">
                          2What’s the game about?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-2-1" className="collapse" aria-labelledby="headingSecondary-2-1" data-parent="#accordionSecondaryTwo">
                      <div className="card-body">
                        Lorem anim adipisicing pariatur consectetur sint magna eiusmod mollit et amet pariatur sint nulla. Consectetur ex occaecat irure laboris elit enim qui. Laboris sunt laboris ad nulla do aliqua officia proident esse tempor. Cillum laborum aute incididunt nulla exercitation do qui dolore. Sint duis in sint in duis in pariatur velit aliqua nulla aute.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-2-2">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-2-2" aria-expanded="false" aria-controls="collapseSecondary-2-2">
                          2How many creatures are there?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-2-2" className="collapse" aria-labelledby="headingSecondary-2-2" data-parent="#accordionSecondaryTwo">
                      <div className="card-body">
                        The complete collection consists of 50 creatures, 10 from each continent. However, only 30 of them are available from the beginning, and 3 more will be included each month until they reach 50.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-2-3">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-2-3" aria-expanded="false" aria-controls="collapseSecondary-2-3">
                          2How can I get the cards?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-2-3" className="collapse" aria-labelledby="headingSecondary-2-3" data-parent="#accordionSecondaryTwo">
                      <div className="card-body">
                        Do veniam veniam dolore proident consequat sit irure enim. Dolor anim in officia dolor ipsum nostrud et enim Lorem. Commodo pariatur adipisicing fugiat nisi. Deserunt non culpa cillum anim incididunt pariatur laborum consectetur excepteur qui ullamco enim excepteur laborum.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-2-4">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-2-4" aria-expanded="false" aria-controls="collapseSecondary-2-4">
                          2Are all creatures equally easy to get?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-2-4" className="collapse" aria-labelledby="headingSecondary-2-4" data-parent="#accordionSecondaryTwo">
                      <div className="card-body">
                        Ea anim incididunt mollit excepteur consequat cillum velit nisi ea id. Culpa amet ea ea proident deserunt magna ad sit ut ullamco. Magna pariatur excepteur laborum sint ut quis sit ea minim excepteur. Culpa consectetur laboris velit veniam excepteur nulla nulla anim consectetur eu laboris. Reprehenderit deserunt enim Lorem eiusmod mollit pariatur ad irure deserunt nisi ullamco consectetur labore. Proident sit id commodo aute id elit proident. Eiusmod cillum esse aute esse aliquip nulla eu.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-2-5">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-2-5" aria-expanded="false" aria-controls="collapseSecondary-2-5">
                          2Are these creatures real or not?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-2-5" className="collapse" aria-labelledby="headingSecondary-2-5" data-parent="#accordionSecondaryTwo">
                      <div className="card-body">
                        Culpa consequat consectetur aute esse nostrud adipisicing excepteur adipisicing pariatur ex labore esse. Laboris non ad occaecat cillum id do est ullamco ea esse magna enim elit velit. Eu veniam dolore consectetur fugiat non nostrud. Aliqua sunt aliquip est mollit incididunt ipsum adipisicing ad sit laborum labore mollit ut. Consequat ad do adipisicing excepteur cillum non consectetur labore ex nulla.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card accordion-main-card">
              <div className="card-header" id="headingMainThree">
                <h4 className="bigger fw-700 mb-0">
                  <button className="btn btn-link accordion-main--btn-link btn-block collapsed text-left " type="button" data-toggle="collapse" data-target="#collapseMainThree" aria-expanded="true" aria-controls="collapseMainThree">
                    Trading
                  </button>
                </h4>
              </div>
              <div id="collapseMainThree" className="collapse" aria-labelledby="headingMainThree" data-parent="#accordionMainOne">
                <div className="accordion accordion-secondary" id="accordionSecondaryThree">
                  <div className="card">
                    <div className="card-header" id="headingSecondary-3-1">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-3-1" aria-expanded="true" aria-controls="collapseSecondary-3-1">
                          3What’s the game about?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-3-1" className="collapse" aria-labelledby="headingSecondary-3-1" data-parent="#accordionSecondaryThree">
                      <div className="card-body">
                        Lorem anim adipisicing pariatur consectetur sint magna eiusmod mollit et amet pariatur sint nulla. Consectetur ex occaecat irure laboris elit enim qui. Laboris sunt laboris ad nulla do aliqua officia proident esse tempor. Cillum laborum aute incididunt nulla exercitation do qui dolore. Sint duis in sint in duis in pariatur velit aliqua nulla aute.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-3-2">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-3-2" aria-expanded="false" aria-controls="collapseSecondary-3-2">
                          3How many creatures are there?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-3-2" className="collapse" aria-labelledby="headingSecondary-3-2" data-parent="#accordionSecondaryThree">
                      <div className="card-body">
                        The complete collection consists of 50 creatures, 10 from each continent. However, only 30 of them are available from the beginning, and 3 more will be included each month until they reach 50.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-3-3">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-3-3" aria-expanded="false" aria-controls="collapseSecondary-3-3">
                          3How can I get the cards?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-3-3" className="collapse" aria-labelledby="headingSecondary-3-3" data-parent="#accordionSecondaryThree">
                      <div className="card-body">
                        Do veniam veniam dolore proident consequat sit irure enim. Dolor anim in officia dolor ipsum nostrud et enim Lorem. Commodo pariatur adipisicing fugiat nisi. Deserunt non culpa cillum anim incididunt pariatur laborum consectetur excepteur qui ullamco enim excepteur laborum.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-3-4">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-3-4" aria-expanded="false" aria-controls="collapseSecondary-3-4">
                          3Are all creatures equally easy to get?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-3-4" className="collapse" aria-labelledby="headingSecondary-3-4" data-parent="#accordionSecondaryThree">
                      <div className="card-body">
                        Ea anim incididunt mollit excepteur consequat cillum velit nisi ea id. Culpa amet ea ea proident deserunt magna ad sit ut ullamco. Magna pariatur excepteur laborum sint ut quis sit ea minim excepteur. Culpa consectetur laboris velit veniam excepteur nulla nulla anim consectetur eu laboris. Reprehenderit deserunt enim Lorem eiusmod mollit pariatur ad irure deserunt nisi ullamco consectetur labore. Proident sit id commodo aute id elit proident. Eiusmod cillum esse aute esse aliquip nulla eu.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-3-5">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-3-5" aria-expanded="false" aria-controls="collapseSecondary-3-5">
                          3Are these creatures real or not?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-3-5" className="collapse" aria-labelledby="headingSecondary-3-5" data-parent="#accordionSecondaryThree">
                      <div className="card-body">
                        Culpa consequat consectetur aute esse nostrud adipisicing excepteur adipisicing pariatur ex labore esse. Laboris non ad occaecat cillum id do est ullamco ea esse magna enim elit velit. Eu veniam dolore consectetur fugiat non nostrud. Aliqua sunt aliquip est mollit incididunt ipsum adipisicing ad sit laborum labore mollit ut. Consequat ad do adipisicing excepteur cillum non consectetur labore ex nulla.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card accordion-main-card">
              <div className="card-header" id="headingMainFour">
                <h4 className="bigger fw-700 mb-0">
                  <button className="btn btn-link accordion-main--btn-link btn-block collapsed text-left " type="button" data-toggle="collapse" data-target="#collapseMainFour" aria-expanded="true" aria-controls="collapseMainFour">
                    Jackpot
                  </button>
                </h4>
              </div>
              <div id="collapseMainFour" className="collapse" aria-labelledby="headingMainFour" data-parent="#accordionMainOne">
                <div className="accordion accordion-secondary" id="accordionSecondaryFour">
                  <div className="card">
                    <div className="card-header" id="headingSecondary-4-1">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-4-1" aria-expanded="true" aria-controls="collapseSecondary-4-1">
                          4What’s the game about?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-4-1" className="collapse" aria-labelledby="headingSecondary-4-1" data-parent="#accordionSecondaryFour">
                      <div className="card-body">
                        Lorem anim adipisicing pariatur consectetur sint magna eiusmod mollit et amet pariatur sint nulla. Consectetur ex occaecat irure laboris elit enim qui. Laboris sunt laboris ad nulla do aliqua officia proident esse tempor. Cillum laborum aute incididunt nulla exercitation do qui dolore. Sint duis in sint in duis in pariatur velit aliqua nulla aute.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-4-2">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-4-2" aria-expanded="false" aria-controls="collapseSecondary-4-2">
                          4How many creatures are there?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-4-2" className="collapse" aria-labelledby="headingSecondary-4-2" data-parent="#accordionSecondaryFour">
                      <div className="card-body">
                        The complete collection consists of 50 creatures, 10 from each continent. However, only 30 of them are available from the beginning, and 3 more will be included each month until they reach 50.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-4-3">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-4-3" aria-expanded="false" aria-controls="collapseSecondary-4-3">
                          4How can I get the cards?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-4-3" className="collapse" aria-labelledby="headingSecondary-4-3" data-parent="#accordionSecondaryFour">
                      <div className="card-body">
                        Do veniam veniam dolore proident consequat sit irure enim. Dolor anim in officia dolor ipsum nostrud et enim Lorem. Commodo pariatur adipisicing fugiat nisi. Deserunt non culpa cillum anim incididunt pariatur laborum consectetur excepteur qui ullamco enim excepteur laborum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card accordion-main-card">
              <div className="card-header" id="headingMainFive">
                <h4 className="bigger fw-700 mb-0">
                  <button className="btn btn-link accordion-main--btn-link btn-block collapsed text-left " type="button" data-toggle="collapse" data-target="#collapseMainFive" aria-expanded="true" aria-controls="collapseMainFive">
                    Tarasca Cards
                  </button>
                </h4>
              </div>
              <div id="collapseMainFive" className="collapse" aria-labelledby="headingMainFive" data-parent="#accordionMainOne">
                <div className="accordion accordion-secondary" id="accordionSecondaryFive">
                  <div className="card">
                    <div className="card-header" id="headingSecondary-5-1">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-5-1" aria-expanded="true" aria-controls="collapseSecondary-5-1">
                          5What’s the game about?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-5-1" className="collapse" aria-labelledby="headingSecondary-5-1" data-parent="#accordionSecondaryFive">
                      <div className="card-body">
                        Lorem anim adipisicing pariatur consectetur sint magna eiusmod mollit et amet pariatur sint nulla. Consectetur ex occaecat irure laboris elit enim qui. Laboris sunt laboris ad nulla do aliqua officia proident esse tempor. Cillum laborum aute incididunt nulla exercitation do qui dolore. Sint duis in sint in duis in pariatur velit aliqua nulla aute.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-5-2">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-5-2" aria-expanded="false" aria-controls="collapseSecondary-5-2">
                          5How many creatures are there?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-5-2" className="collapse" aria-labelledby="headingSecondary-5-2" data-parent="#accordionSecondaryFive">
                      <div className="card-body">
                        The complete collection consists of 50 creatures, 10 from each continent. However, only 30 of them are available from the beginning, and 3 more will be included each month until they reach 50.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-5-3">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-5-3" aria-expanded="false" aria-controls="collapseSecondary-5-3">
                          5How can I get the cards?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-5-3" className="collapse" aria-labelledby="headingSecondary-5-3" data-parent="#accordionSecondaryFive">
                      <div className="card-body">
                        Do veniam veniam dolore proident consequat sit irure enim. Dolor anim in officia dolor ipsum nostrud et enim Lorem. Commodo pariatur adipisicing fugiat nisi. Deserunt non culpa cillum anim incididunt pariatur laborum consectetur excepteur qui ullamco enim excepteur laborum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card accordion-main-card">
              <div className="card-header" id="headingMainSix">
                <h4 className="bigger fw-700 mb-0">
                  <button className="btn btn-link accordion-main--btn-link btn-block collapsed text-left " type="button" data-toggle="collapse" data-target="#collapseMainSix" aria-expanded="true" aria-controls="collapseMainSix">
                    Other Uses
                  </button>
                </h4>
              </div>
              <div id="collapseMainSix" className="collapse" aria-labelledby="headingMainSix" data-parent="#accordionMainOne">
                <div className="accordion accordion-secondary" id="accordionSecondarySix">
                  <div className="card">
                    <div className="card-header" id="headingSecondary-6-1">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-6-1" aria-expanded="true" aria-controls="collapseSecondary-6-1">
                          6What’s the game about?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-6-1" className="collapse" aria-labelledby="headingSecondary-6-1" data-parent="#accordionSecondarySix">
                      <div className="card-body">
                        Lorem anim adipisicing pariatur consectetur sint magna eiusmod mollit et amet pariatur sint nulla. Consectetur ex occaecat irure laboris elit enim qui. Laboris sunt laboris ad nulla do aliqua officia proident esse tempor. Cillum laborum aute incididunt nulla exercitation do qui dolore. Sint duis in sint in duis in pariatur velit aliqua nulla aute.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-6-2">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-6-2" aria-expanded="false" aria-controls="collapseSecondary-6-2">
                          6How many creatures are there?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-6-2" className="collapse" aria-labelledby="headingSecondary-6-2" data-parent="#accordionSecondarySix">
                      <div className="card-body">
                        The complete collection consists of 50 creatures, 10 from each continent. However, only 30 of them are available from the beginning, and 3 more will be included each month until they reach 50.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-6-3">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-6-3" aria-expanded="false" aria-controls="collapseSecondary-6-3">
                          6How can I get the cards?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-6-3" className="collapse" aria-labelledby="headingSecondary-6-3" data-parent="#accordionSecondarySix">
                      <div className="card-body">
                        Do veniam veniam dolore proident consequat sit irure enim. Dolor anim in officia dolor ipsum nostrud et enim Lorem. Commodo pariatur adipisicing fugiat nisi. Deserunt non culpa cillum anim incididunt pariatur laborum consectetur excepteur qui ullamco enim excepteur laborum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card accordion-main-card">
              <div className="card-header" id="headingMainSeven">
                <h4 className="bigger fw-700 mb-0">
                  <button className="btn btn-link accordion-main--btn-link btn-block collapsed text-left " type="button" data-toggle="collapse" data-target="#collapseMainSeven" aria-expanded="true" aria-controls="collapseMainSeven">
                    Blockchain and Data Security
                  </button>
                </h4>
              </div>
              <div id="collapseMainSeven" className="collapse" aria-labelledby="headingMainSeven" data-parent="#accordionMainOne">
                <div className="accordion accordion-secondary" id="accordionSecondarySeven">
                  <div className="card">
                    <div className="card-header" id="headingSecondary-7-1">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-7-1" aria-expanded="true" aria-controls="collapseSecondary-7-1">
                          7What’s the game about?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-7-1" className="collapse" aria-labelledby="headingSecondary-7-1" data-parent="#accordionSecondarySeven">
                      <div className="card-body">
                        Lorem anim adipisicing pariatur consectetur sint magna eiusmod mollit et amet pariatur sint nulla. Consectetur ex occaecat irure laboris elit enim qui. Laboris sunt laboris ad nulla do aliqua officia proident esse tempor. Cillum laborum aute incididunt nulla exercitation do qui dolore. Sint duis in sint in duis in pariatur velit aliqua nulla aute.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-7-2">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-7-2" aria-expanded="false" aria-controls="collapseSecondary-7-2">
                          7How many creatures are there?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-7-2" className="collapse" aria-labelledby="headingSecondary-7-2" data-parent="#accordionSecondarySeven">
                      <div className="card-body">
                        The complete collection consists of 50 creatures, 10 from each continent. However, only 30 of them are available from the beginning, and 3 more will be included each month until they reach 50.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSecondary-7-3">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block accordion-secondary--btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSecondary-7-3" aria-expanded="false" aria-controls="collapseSecondary-7-3">
                          7How can I get the cards?
                          <i className="fas fa-plus"></i>
                          <i className="fas fa-minus"></i>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSecondary-7-3" className="collapse" aria-labelledby="headingSecondary-7-3" data-parent="#accordionSecondarySeven">
                      <div className="card-body">
                        Do veniam veniam dolore proident consequat sit irure enim. Dolor anim in officia dolor ipsum nostrud et enim Lorem. Commodo pariatur adipisicing fugiat nisi. Deserunt non culpa cillum anim incididunt pariatur laborum consectetur excepteur qui ullamco enim excepteur laborum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default Faq;
