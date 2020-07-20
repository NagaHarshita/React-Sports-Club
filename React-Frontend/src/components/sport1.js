import React ,{ Component }  from 'react';
import Header from './header';
import Footer from './footer';
import '../css/style.css';



class sport1 extends Component
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
                    <h1>Badminton</h1>
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
                      <img src="images/badminton.jpeg" style={{width: '700px', height: '500px', alignItems: '”right”', paddingTop: '20px'}} /></div>
                  </div>
                  <div style={{padding: '20px'}}>
                    <p>Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are "singles" (with one player per side) and "doubles" (with two players per side). Badminton is often played as a casual outdoor activity in a yard or on a beach; formal games are played on a rectangular indoor court. Points are scored by striking the shuttlecock with the racquet and landing it within the opposing side's half of the court.

Each side may only strike the shuttlecock once before it passes over the net. Play ends once the shuttlecock has struck the floor or if a fault has been called by the umpire, service judge, or (in their absence) the opposing side.[1]

The shuttlecock is a feathered or (in informal matches) plastic projectile which flies differently from the balls used in many other sports. In particular, the feathers create much higher drag, causing the shuttlecock to decelerate more rapidly. Shuttlecocks also have a high top speed compared to the balls in other racquet sports. The flight of the shuttlecock gives the sport its distinctive nature.

The game developed in British India from the earlier game of battledore and shuttlecock. European play came to be dominated by Denmark but the game has become very popular in Asia, with recent competitions dominated by China. Since 1992, badminton has been a Summer Olympic sport with four events: men's singles, women's singles, men's doubles, and women's doubles,[2] with mixed doubles added four years later. At high levels of play, the sport demands excellent fitness: players require aerobic stamina, agility, strength, speed, and precision. It is also a technical sport, requiring good motor coordination and the development of sophisticated racquet movements.</p></div>
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

export default sport1;