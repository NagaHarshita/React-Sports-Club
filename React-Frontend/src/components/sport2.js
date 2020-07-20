import React ,{ Component }  from 'react';
import Header from './header';
import Footer from './footer';
import '../css/style.css';



class sport2 extends Component
{
    render() 
    {

      return (
        <div style={{marginTop:'300px',zIndex:'10'}}>
        <Header/>
      <div style={{backgroundColor:"white"}}>
        
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico" />

      <main>
        {/* Hero Area Start*/}
        <div className="slider-area" style={{backgroundImage: 'url("images/h1_hero.png")',zIndex:'1',marginTop:'-100px'}}>
          <div className="single-slider slider-height d-flex">
            <div className="container">
              <div className="row justify-content-center">
                <div className="hero__caption" >
                  <br />
                  <h1>Tennis</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/*Hero Area End*/}
        {/*? Pricing Card Start */}
        <section className="pricing-card-area">
            <div className="container100">
              <div className="single-card text-center mb-30">
                <div className="card-top">
                  <div>
                    <img src="images/tennis.jpeg" style={{width: '700px', height: '500px', alignItems: '”right”', paddingTop: '20px'}} /></div>
                </div>
                <div style={{padding: '20px'}}>
                  <p>Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court. The object of the game is to maneuver the ball in such a way that the opponent is not able to play a valid return. The player who is unable to return the ball will not gain a point, while the opposite player will.

Tennis is an Olympic sport and is played at all levels of society and at all ages. The sport can be played by anyone who can hold a racket, including wheelchair users. The modern game of tennis originated in Birmingham, England, in the late 19th century as lawn tennis.[1] It had close connections both to various field (lawn) games such as croquet and bowls as well as to the older racket sport today called real tennis. During most of the 19th century, in fact, the term tennis referred to real tennis, not lawn tennis.

The rules of modern tennis have changed little since the 1890s. Two exceptions are that from 1908 to 1961 the server had to keep one foot on the ground at all times, and the adoption of the tiebreak in the 1970s. A recent addition to professional tennis has been the adoption of electronic review technology coupled with a point-challenge system, which allows a player to contest the line call of a point, a system known as Hawk-Eye.</p></div>
                <div className="card-mid" />
                <div className="card-bottom"><a href={process.env.PUBLIC_URL +"/interact"} className="borders-btn">Get Started</a></div>
              </div>
            </div>
          </section>
          <style dangerouslySetInnerHTML={{__html: "  h1 { \n            color: green; \n        } \n        img { \n            float: left; \n            margin-right: 75px; \n        } \n        p { \n            text-align: justify; \n            font-size: 18px; \n        } \n    " }} /> 
       
  
      </main>
      <Footer/>
      </div>
      </div>


      );

    }
}

export default sport2;