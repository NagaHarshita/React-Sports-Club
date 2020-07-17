import React ,{ Component }  from 'react';
import Header from './header';
import '../css/games.css';
import Footer from './footer';
//import {Navbar,Nav} from 'react-bootstrap';


class games extends Component{
    render() {
        
              return (
                <div>
                  <meta charSet="UTF-8" />
                  <meta name="description" content="Fashi Template" />
                  <meta name="keywords" content="Fashi, unica, creative, html" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                  <title>Test2</title>
                  {/* Google Font */}
                  <link href="https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
                  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
                  <link rel="stylesheet" href="test.css" />
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                  
                  <div>
                     <Header/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     </div>
                    <div className="container">
                      <div className="inner-header">
                        <div className="row">
                          <div className="col-lg-2 col-md-2">
                          </div>
                          <div className="col-lg-7 col-md-7">
                            <div className="advanced-search">
                              <button type="button" className="category-btn">All Categories</button>
                              <form action="#" className="input-group">
                                <input type="text" placeholder="Which sport do you need?" />
                                <button type="button"><i className="fa fa-search" aria-hidden="true" /></button>
                              </form>
                            </div>
                          </div>
                          <div className="col-lg-3 text-left col-md-3">
                            <ul className="nav-right">
                              <li className="heart-icon"><a href="#">
                                  {/* <i class="icon_heart_alt"></i> */}
                                  <i className="fa fa-heart" aria-hidden="true" />
                                  <span>3</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/* Page Preloder */}
                  {/* Related Products Section End */}
                  <div className="related-products spad">
                    <div className="container2">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="section-title">
                            <h2>Sports</h2>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-sm-6">
                          <div className="product-item">
                            <div className="pi-pic">
                              <img src="images/sports.jpg" alt="" />
                              <div className="sale">BADMINTON</div>
                              <ul>
                                <li className="w-icon active"><a href="#">
                                    {/* <div class="icon">
                                                  <i class="icon_heart_alt"></i>
                                              </div> */}
                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                  </a></li>
                                <li className="quick-view"><a href="#">ENGAGE</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="product-item">
                            <div className="pi-pic">
                              <img src="images/sports.jpg" alt="" />
                              <div className="sale">TENNIS</div>
                              <ul>
                                <li className="w-icon active"><a href="#">
                                    {/* <div class="icon">
                                                  <i class="icon_heart_alt"></i>
                                              </div> */}
                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                  </a></li>
                                <li className="quick-view"><a href="#">ENGAGE</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="product-item">
                            <div className="pi-pic">
                              <img src="images/sports.jpg" alt="" />
                              <div className="sale">CHESS</div>
                              <ul>
                                <li className="w-icon active"><a href="#">
                                    {/* <div class="icon">
                                                  <i class="icon_heart_alt"></i>
                                              </div> */}
                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                  </a></li>
                                <li className="quick-view"><a href="#">ENGAGE</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="product-item">
                            <div className="pi-pic">
                              <img src="images/sports.jpg" alt="" />
                              <div className="sale">CARROMS</div>
                              <ul>
                                <li className="w-icon active"><a href="#">
                                    {/* <div class="icon">
                                                  <i class="icon_heart_alt"></i>
                                              </div> */}
                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                  </a></li>
                                <li className="quick-view"><a href="#">ENGAGE</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container2">
                      <div className="row">
                        <div className="col-lg-3 col-sm-6">
                          <div className="product-item">
                            <div className="pi-pic">
                              <img src="images/sports.jpg" alt="" />
                              <div className="sale">YOGA</div><ul>
                                <li className="w-icon active"><a href="#">
                                    {/* <div class="icon">
                                                  <i class="icon_heart_alt"></i>
                                              </div> */}
                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                  </a></li>
                                <li className="quick-view"><a href="#">ENGAGE</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="product-item">
                            <div className="pi-pic">
                              <img src="images/sports.jpg" alt="" />
                              <div className="sale">CRICKET</div>
                              <ul>
                                <li className="w-icon active"><a href="#">
                                    {/* <div class="icon">
                                                  <i class="icon_heart_alt"></i>
                                              </div> */}
                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                  </a></li>
                                <li className="quick-view"><a href="#">ENGAGE</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="product-item">
                            <div className="pi-pic">
                              <img src="images/sports.jpg" alt="" />
                              <div className="sale">BASKETBALL</div>
                              <ul>
                                <li className="w-icon active"><a href="#">
                                    {/* <div class="icon">
                                                  <i class="icon_heart_alt"></i>
                                              </div> */}
                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                  </a></li>
                                <li className="quick-view"><a href="#">ENGAGE</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="product-item">
                            <div className="pi-pic">
                              <img src="images/sports.jpg" alt="" />
                              <div className="sale">FOOTBALL</div>
                              <ul>
                                <li className="w-icon active"><a href="#">
                                    {/* <div class="icon">
                                                  <i class="icon_heart_alt"></i>
                                              </div> */}
                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                  </a></li>
                                <li className="quick-view"><a href="#">ENGAGE</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Footer/>
                  {/* Footer Section End */}
                  {/* Js Plugins */}
                </div>
              );
            }
          };
       

    

export default games;