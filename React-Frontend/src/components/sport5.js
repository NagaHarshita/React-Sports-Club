import React ,{ Component }  from 'react';
import Header from './header';
import Footer from './footer';
import '../css/style.css';



class sport5 extends Component
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
                    <h1>Volleyball</h1>
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
                      <img src="images/volleyball1.jpeg" style={{width: '700px', height: '500px', alignItems: '”right”', paddingTop: '20px'}} /></div>
                  </div>
                  <div style={{padding: '20px'}}>
                    <p>Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules.[1] It has been a part of the official program of the Summer Olympic Games since Tokyo 1964.

The complete set of rules is extensive,[2] but play essentially proceeds as follows: a player on one of the teams begins a 'rally' by serving the ball (tossing or releasing it and then hitting it with a hand or arm), from behind the back boundary line of the court, over the net, and into the receiving team's court.[3] The receiving team must not let the ball be grounded within their court. The team may touch the ball up to 3 times, but individual players may not touch the ball twice consecutively.[3] Typically, the first two touches are used to set up for an attack, an attempt to direct the ball back over the net in such a way that the serving team is unable to prevent it from being grounded in their court.Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules.[1] It has been a part of the official program of the Summer Olympic Games since Tokyo 1964.

The complete set of rules is extensive,[2] but play essentially proceeds as follows: a player on one of the teams begins a 'rally' by serving the ball (tossing or releasing it and then hitting it with a hand or arm), from behind the back boundary line of the court, over the net, and into the receiving team's court.[3] The receiving team must not let the ball be grounded within their court. 
The team may touch the ball up to 3 times, but individual players may not touch the ball twice consecutively.[3] Typically, the first two touches are used to set up for an attack, an attempt to direct the ball back over the net in such a way that the serving team is unable to prevent it from being grounded in their court.</p></div>
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

export default sport5;