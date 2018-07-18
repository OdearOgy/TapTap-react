import React, { Component } from 'react';
import './App.css';
import './Tss.css';
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';
import Banner from './img/banner6.jpg';
import card from './img/card-yerevan.jpg';
import logo from './img/512w/Artboard.png';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='Main'>
                    <div className='Header w--full h--full' style={{backgroundImage: `url(${Banner})`}}>
                        <div className='Header-cover w--full h--full'>
                            <div className='Nav w--full m--0'>
                                <div className='Nav-inner'>
                                    <div className='Logo d--inline-block f--left' style={{backgroundImage: `url(${card})`}}></div>
                                    {/* <div className='clear'></div> */}

                                </div>
                            </div>
                            <div className="Titles text-a--center" >
                              <h2 className="f-f--ourF c--white">TapTap</h2>
                              <p className="f-f--ourF c--white">Walk in a local's shoes & make your own story</p>
                              <button className="Btn-setts f-f--ourF b--white">Become a Local</button>
                            </div>
                          </div>
                          <button className="slider-btn-bottom">click me </button>

                    </div>
                    <section>
                        <div className="Tours-section d--flex ">
                          <div className="Section-header d--flex">
                              <h2>Our Fantastic Tours</h2>
                              <button className="gdn-btn bg--gradient b--none">View Tours <i class="arrow right"></i> </button>
                          </div>
                          <div className="Cards-parent d--flex">
                              <div className="Cards b--black tour-cards">
                                  <div className="card-header" >
                                      <div className="Image">
                                          <img src={require('./img/card-yerevan.jpg')} />
                                      </div>
                                            <div className="card-bottom d--flex">
                                                <div className="card-text">
                                                  <p>YEREVAN * ARMENIA</p>
                                                  <h3>Discover hidden places in Yerevan</h3>
                                                  <div className="card-rate-sys"></div>

                                                  <div className="Card-creator d--flex">
                                                    <img src={require('./img/avatar1.jpg')} className="avatar" />
                                                    <p>Tour by <a href="https://facebook.com/odearogy/" target="_blank" className="text-d--none">Hovo Mkhitaryan</a> </p>
                                                  </div>


                                                </div>
                                                <div className="card-fab">&#43</div>


                                            </div>





                                  </div>
                              </div>
                              <div className="Cards b--black tour-cards">
                                  <div className="card-header" >
                                      <div className="card-img" style={{backgroundImage: `url(${card})`}}></div>



                                      <div className="card-cover"></div>

                                      <div className="card-menu">


                                      </div>

                                      <div className="card-name">
                                          <span classNam="last">Yerevan</span>
                                          <span classNam="first">tour</span>

                                      </div>
                                  </div>
                              </div>
                              <div className="Cards b--black tour-cards">
                                  <div className="card-header" >
                                      <div className="card-img" style={{backgroundImage: `url(${card})`}}></div>



                                      <div className="card-cover"></div>

                                      <div className="card-menu">


                                      </div>

                                      <div className="card-name">
                                          <span classNam="last">Yerevan</span>
                                          <span classNam="first">tour</span>

                                      </div>
                                  </div>
                              </div>
                              <button className="Slider-btn"> <i class="arrow right slide-arrow"></i></button>
                          </div>
                        </div>

                        <div className="Blog-section d--flex">
                          <div className="Section-header d--flex ">
                              <h2>Our Recent Blogs</h2>
                              <button className="gdn-btn bg--gradient b--none">View Blogs <i class="arrow right "></i> </button>
                          </div>
                          <div className="Cards-parent d--flex">
                              <div className="Cards b--black"> hello world</div>
                              <div className="Cards b--black">lorem ipsum</div>
                              <div className="Cards b--black"> lorem ipsum 2</div>
                              <button className="Slider-btn"> <i class="arrow right slide-arrow"></i></button>
                          </div>
                        </div>
                  </section>

                </div>
            </Router>
        );
    }
}

export default App;
