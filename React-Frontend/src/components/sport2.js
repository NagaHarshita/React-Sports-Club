import React ,{ Component }  from 'react';
import Header from './header';
import Footer from './footer';
import '../css/style.css';



class sport2 extends Component
{
    render() 
    {
        return (
            <div style={{backgroundColor:"white"}}>
              
              <main>
                {/* Hero Area Start*/}
              
                <div className="slider-area" style={{backgroundImage: 'url("images/h1_hero.png")'}}>
                
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
                    <div className="col-xl-12 col-lg-10 col-md-10 col-sm-10">
                      <div className="single-card text-center mb-30">
                        <div className="card-top">
                          <p>Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are "singles" (with one player per side) and "doubles" (with two players per side). Badminton is often played as a casual outdoor activity in a yard or on a beach; formal games are played on a rectangular indoor court. Points are scored by striking the shuttlecock with the racquet and landing it within the opposing side's half of the court.
                            Each side may only strike the shuttlecock once before it passes over the net. Play ends once the shuttlecock has struck the floor or if a fault has been called by the umpire, service judge, or (in their absence) the opposing side.[1]
                            The shuttlecock is a feathered or (in informal matches) plastic projectile which flies differently from the balls used in many other sports. In particular, the feathers create much higher drag, causing the shuttlecock to decelerate more rapidly. Shuttlecocks also have a high top speed compared to the balls in other racquet sports. The flight of the shuttlecock gives the sport its distinctive nature.
                            The game developed in British India from the earlier game of battledore and shuttlecock. European play came to be dominated by Denmark but the game has become very popular in Asia, with recent competitions dominated by China. Since 1992, badminton has been a Summer Olympic sport with four events: men's singles, women's singles, men's doubles, and women's doubles,[2] with mixed doubles added four years later. At high levels of play, the sport demands excellent fitness: players require aerobic stamina, agility, strength, speed, and precision. It is also a technical sport, requiring good motor coordination and the development of sophisticated racquet movements.[3]</p>
                        </div>
                        <div className="card-mid">
                        </div>
                        <div className="card-bottom">
                        <a  href={process.env.PUBLIC_URL +"/interact"}className="borders-btn">Get Started</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Pricing Card End */}
                {/* Scroll Up */}
                <div id="back-top">
                  <a title="Go to Top" href={process.env.PUBLIC_URL +"/interact"}> <i className="fas fa-level-up-alt" /></a>
                </div>
                <div style={{padding: '20px'}}>
                  <p>Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court. The object of the game is to maneuver the ball in such a way that the opponent is not able to play a valid return. The player who is unable to return the ball will not gain a point, while the opposite player will.

Tennis is an Olympic sport and is played at all levels of society and at all ages. The sport can be played by anyone who can hold a racket, including wheelchair users. The modern game of tennis originated in Birmingham, England, in the late 19th century as lawn tennis.[1] It had close connections both to various field (lawn) games such as croquet and bowls as well as to the older racket sport today called real tennis. During most of the 19th century, in fact, the term tennis referred to real tennis, not lawn tennis.

The rules of modern tennis have changed little since the 1890s. Two exceptions are that from 1908 to 1961 the server had to keep one foot on the ground at all times, and the adoption of the tiebreak in the 1970s. A recent addition to professional tennis has been the adoption of electronic review technology coupled with a point-challenge system, which allows a player to contest the line call of a point, a system known as Hawk-Eye.</p></div>
                <div className="card-mid" />
                <div className="card-bottom"><a href={process.env.PUBLIC_URL +"/interact"} className="borders-btn">Get Started</a></div>
             
            
          
      </main>
      <Footer/>
      
      </div>


      );

    }
}

export default sport2;