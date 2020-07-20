import React ,{ Component }  from 'react';
import Header from './header';
import '../css/profile.css';
import Footer from './footer';
//import {Navbar,Nav} from 'react-bootstrap';


class profile extends Component{
    render() {
              return (
                <div>
                  <meta charSet="utf-8" />
                  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                  <title>Jackson Template</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <meta name="description" content />
                  <meta name="keywords" content />
                  <meta name="author" content />
                  {/* Facebook and Twitter integration */}
                  <meta property="og:title" content />
                  <meta property="og:image" content />
                  <meta property="og:url" content />
                  <meta property="og:site_name" content />
                  <meta property="og:description" content />
                  <meta name="twitter:title" content />
                  <meta name="twitter:image" content />
                  <meta name="twitter:url" content />
                  <meta name="twitter:card" content />
                  {/* Place favicon.ico and apple-touch-icon.png in the root directory */}
                  <link rel="shortcut icon" href="favicon.ico" />
                  <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet" />
                  <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700" rel="stylesheet" />
                  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
                  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                  {/* Animate.css */}
                  <link rel="stylesheet" href="css/animate.css" />
                  {/* Icomoon Icon Fonts*/}
                  <link rel="stylesheet" href="css/icomoon.css" />
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                  
              <div>
                  <Header/>
              </div>
                  <div id="colorlib-page" style={{backgroundColor:'white'}}>
                    
                      
                    <div>
                      <section className="colorlib-about" data-section="about">
                        <div className="colorlib-narrow-content">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                  <div className="about-desc">
                                    <span className="heading-meta" style={{fontSize:'30px',marginTop:'50px'}}>Profile</span>
                                    <h2 style={{color:'black'}}>About me</h2>
                                      <img  className="author-img" src="/images/profile/about.jpg"  style={{width: '200px',height: '200px',margin: '0',borderRadius:'50%'}}/>
                                            <h1 id="colorlib-logo" style={{color:'black'}}>Naga Harshita</h1>
                                    <p><strong>Hi I'm Naga Harshita</strong> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-3 animate-box">
                                  <div className="services color-1">
                                    <div className="icon2" style={{color:'pink'}}><i className=" fa fa-lightbulb-o" /></div>
                                    <h3 style={{color:'black'}}>Graphic Design</h3>
                                  </div>
                                </div>
                                <div className="col-md-3 animate-box">
                                  <div className="services color-2">
                                    <div className="icon2"><i className="fa fa-globe" /></div>
                                    <h3 style={{color:'black'}}>Web Design</h3>
                                  </div>
                                </div>
                                <div className="col-md-3 animate-box">
                                  <div className="services color-3">
                                    <div className="icon2"><i className="fa fa-database" /></div>
                                    <h3 style={{color:'black'}}>Software</h3>
                                  </div>
                                </div>
                                <div className="col-md-3 animate-box">
                                  <div className="services color-4">
                                    <div className="icon2"><i className="fa fa-mobile" /></div>
                                    <h3 style={{color:'black'}}>Application</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="colorlib-services" data-section="services">
                        <div className="colorlib-narrow-content">
                          <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                              <span className="heading-meta" style={{fontSize:'30px'}}>Sports I play?</span>
                              <h2 style={{color:'black'}}>Here are some of my expertise</h2>
                            </div>
                          </div>
                          <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                              <div className="services color-1">
                                <span className="icon">
                                  <i className="fa fa-futbol-o " />
                                </span>
                                <div className="desc">
                                  <h3 style={{color:'black'}}>Football</h3>
                                  <p>Experience:beginner</p>
                                  <p>Rating:4</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                              <div className="services color-2">
                                <span className="icon">
                                <i class="material-icons">sports_basketball</i>
                                </span>
                                <div className="desc">
                                  <h3 style={{color:'black'}}>Basketball</h3>
                                  <p>Experience:beginner</p>
                                  <p>Rating:4</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                              <div className="services color-3">
                                <span className="icon">
                                <i class="material-icons">sports_tennis</i>
                                </span>
                                <div className="desc">
                                  <h3 style={{color:'black'}}>Tennis</h3>
                                  <p>Experience:beginner</p>
                                  <p>Rating:4</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                              <div className="services color-4">
                                <span className="icon">
                                <i class="material-icons">sports_cricket</i>
                                </span>
                                <div className="desc">
                                  <h3 style={{color:'black'}}>Cricket</h3>
                                  <p>Experience:beginner</p>
                                  <p>Rating:4</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                              <div className="services color-5">
                                <span className="icon">
                                <i class="material-icons">sports_volleyball</i>
                                </span>
                                <div className="desc">
                                  <h3 style={{color:'black'}}>Volleyball</h3>
                                  <p>Experience:beginner</p>
                                  <p>Rating:4</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                              <div className="services color-6">
                                <span className="icon">
                                <i class="material-icons">sports_golf</i>
                                </span>
                                <div className="desc">
                                  <h3 style={{color:'black'}}>Golf</h3>
                                  <p>Experience:beginner</p>
                                  <p>Rating:4</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(images/profile/cover_bg_1.jpg)'}} data-stellar-background-ratio="0.5">
                        <div className="overlay" />
                        <div className="colorlib-narrow-content">
                          <div className="row">
                          </div>
                          <div className="row">
                            <div className="col-md-3 text-center animate-box">
                              <span className="colorlib-counter js-counter" data-from={0} data-to={309} data-speed={5000} data-refresh-interval={50} />
                              <span className="colorlib-counter-label">Club</span>
                              <p style={{color:'white'}}>6</p>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                              <span className="colorlib-counter js-counter" data-from={0} data-to={356} data-speed={5000} data-refresh-interval={50} />
                              <span className="colorlib-counter-label">Following</span>
                              <p style={{color:'white'}}>98</p>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                              <span className="colorlib-counter js-counter" data-from={0} data-to={30} data-speed={5000} data-refresh-interval={50} />
                              <span className="colorlib-counter-label">Followers</span>
                              <p style={{color:'white'}}>84</p>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                              <span className="colorlib-counter js-counter" data-from={0} data-to={10} data-speed={5000} data-refresh-interval={50} />
                              <span className="colorlib-counter-label">Partners</span>
                              <p style={{color:'white'}}>42</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <section className="colorlib-education" data-section="education">
                        <div className="colorlib-narrow-content">
                          <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                              <span className="heading-meta" style={{fontSize:'30px'}}>Education</span>
                              <h2 className="colorlib-heading animate-box">Education</h2>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                              <div className="fancy-collapse-panel">
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                  <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingOne">
                                      <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Master Degree Graphic Design
                                        </a>
                                      </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                      <div className="panel-body">
                                        <div className="row">
                                          <div className="col-md-6">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                          </div>
                                          <div className="col-md-6">
                                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingTwo">
                                      <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachelor Degree of Computer Science
                                        </a>
                                      </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                      <div className="panel-body">
                                        <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        <ul>
                                          <li>Separated they live in Bookmarksgrove right</li>
                                          <li>Separated they live in Bookmarksgrove right</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingThree">
                                      <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Diploma in Information Technology
                                        </a>
                                      </h4>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                      <div className="panel-body">
                                        <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
                                      </div>
                                    </div>
                                  </div>
                                  <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingFour">
                                      <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Diploma in Information Technology
                                        </a>
                                      </h4>
                                    </div>
                                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                      <div className="panel-body">
                                        <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
                                      </div>
                                    </div>
                                  </div>
                                  <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingFive">
                                      <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">High School Secondary Education
                                        </a>
                                      </h4>
                                    </div>
                                    <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                      <div className="panel-body">
                                        <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="colorlib-experience" data-section="experience">
                        <div className="colorlib-narrow-content">
                          <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                              <span className="heading-meta" style={{fontSize:'30px'}}>Experience</span>
                              <h2 className="colorlib-heading animate-box">Work Experience</h2>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="timeline-centered">
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                  <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-1">
                                      <i className="icon-pen2" />
                                    </div>
                                    <div className="timeline-label">
                                      <h2><a href="#">Full Stack Developer</a> <span>2017-2018</span></h2>
                                      <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                                    </div>
                                  </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                  <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-2">
                                      <i className="icon-pen2" />
                                    </div>
                                    <div className="timeline-label">
                                      <h2><a href="#">Front End Developer at Google Company</a> <span>2017-2018</span></h2>
                                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                    </div>
                                  </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                  <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-3">
                                      <i className="icon-pen2" />
                                    </div>
                                    <div className="timeline-label">
                                      <h2><a href="#">System Analyst</a> <span>2017-2018</span></h2>
                                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                    </div>
                                  </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                  <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-4">
                                      <i className="icon-pen2" />
                                    </div>
                                    <div className="timeline-label">
                                      <h2><a href="#">Creative Designer</a> <span>2017-2018</span></h2>
                                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                    </div>
                                  </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                  <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-5">
                                      <i className="icon-pen2" />
                                    </div>
                                    <div className="timeline-label">
                                      <h2><a href="#">UI/UX Designer at Envato</a> <span>2017-2018</span></h2>
                                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                    </div>
                                  </div>
                                </article>
                                <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                  <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-none">
                                    </div>
                                  </div>
                                </article>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="colorlib-work" data-section="work">
                        <div className="colorlib-narrow-content">
                          <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                              <span className="heading-meta" style={{fontSize:'30px'}}>My Work</span>
                              <h2 className="colorlib-heading animate-box">Recent Work</h2>
                            </div>
                          </div>
                          <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                              <p className="work-menu"><span><a href="#" className="active">Graphic Design</a></span> <span><a href="#">Web Design</a></span> <span><a href="#">Software</a></span> <span><a href="#">Apps</a></span></p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                              <div className="project" style={{backgroundImage: 'url(images/profile/img-1.jpg)'}}>
                                <div className="desc">
                                  <div className="con">
                                    <h3><a href="work.html">Work 01</a></h3>
                                    <span>Website</span>
                                    <p className="icon">
                                      <span><a href="#"><i className="icon-share3" /></a></span>
                                      <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                      <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                              <div className="project" style={{backgroundImage: 'url(images/profile/img-2.jpg)'}}>
                                <div className="desc">
                                  <div className="con">
                                    <h3><a href="work.html">Work 02</a></h3>
                                    <span>Animation</span>
                                    <p className="icon">
                                      <span><a href="#"><i className="icon-share3" /></a></span>
                                      <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                      <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
                              <div className="project" style={{backgroundImage: 'url(images/profile/img-3.jpg)'}}>
                                <div className="desc">
                                  <div className="con">
                                    <h3><a href="work.html">Work 03</a></h3>
                                    <span>Illustration</span>
                                    <p className="icon">
                                      <span><a href="#"><i className="icon-share3" /></a></span>
                                      <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                      <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
                              <div className="project" style={{backgroundImage: 'url(images/profile/img-4.jpg)'}}>
                                <div className="desc">
                                  <div className="con">
                                    <h3><a href="work.html">Work 04</a></h3>
                                    <span>Application</span>
                                    <p className="icon">
                                      <span><a href="#"><i className="icon-share3" /></a></span>
                                      <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                      <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                              <div className="project" style={{backgroundImage: 'url(images/profile/img-5.jpg)'}}>
                                <div className="desc">
                                  <div className="con">
                                    <h3><a href="work.html">Work 05</a></h3>
                                    <span>Graphic, Logo</span>
                                    <p className="icon">
                                      <span><a href="#"><i className="icon-share3" /></a></span>
                                      <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                      <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                              <div className="project" style={{backgroundImage: 'url(images/profile/img-6.jpg)'}}>
                                <div className="desc">
                                  <div className="con">
                                    <h3><a href="work.html">Work 06</a></h3>
                                    <span>Web Design</span>
                                    <p className="icon">
                                      <span><a href="#"><i className="icon-share3" /></a></span>
                                      <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                      <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 animate-box">
                              <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="colorlib-blog" data-section="blog">
                        <div className="colorlib-narrow-content">
                          <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                              <span className="heading-meta" style={{fontSize:'30px'}}>Read</span>
                              <h2 className="colorlib-heading">Recent Blog</h2>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                              <div className="blog-entry">
                                <a href="blog.html" className="blog-img"><img src="images/profile/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                                <div className="desc">
                                  <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
                                  <h3><a href="blog.html">Renovating National Gallery</a></h3>
                                  <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                              <div className="blog-entry">
                                <a href="blog.html" className="blog-img"><img src="images/profile/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                                <div className="desc">
                                  <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
                                  <h3><a href="blog.html">Wordpress for a Beginner</a></h3>
                                  <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                              <div className="blog-entry">
                                <a href="blog.html" className="blog-img"><img src="images/profile/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                                <div className="desc">
                                  <span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i className="icon-bubble3" /> 4</small></span>
                                  <h3><a href="blog.html">Make website from scratch</a></h3>
                                  <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 animate-box">
                              <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
                            </div>
                          </div>
                        </div>
                      </section>
                      
                    </div>{/* end:colorlib-main */}
                  </div>{/* end:colorlib-page */}
                  {/* jQuery */}
                  {/* jQuery Easing */}
                  {/* Bootstrap */}
                  {/* Waypoints */}
                  {/* Flexslider */}
                  {/* Owl carousel */}
                  {/* Counters */}
                  {/* MAIN JS */}
                  <Footer/>
                </div>
              );
    }
}

export default profile;