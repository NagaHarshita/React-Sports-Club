import React ,{ Component }  from 'react';
import Header from './header';
import Footer from './footer';
import '../css/style.css';



class sport3 extends Component
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
                    <h1>Chess</h1>
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
                      <img src="images/chess.jpeg" style={{width: '700px', height: '500px', alignItems: '”right”', paddingTop: '20px'}} /></div>
                  </div>
                  <div style={{padding: '20px'}}>
                    <p>Chess is a two-player strategy board game played on a checkered board with 64 squares arranged in an 8×8 grid. Played by millions of people worldwide, chess is believed to be derived from the Indian game chaturanga sometime before the 7th century. Chaturanga is also the likely ancestor of the East Asian strategy games xiangqi (Chinese chess), janggi (Korean chess), and shogi (Japanese chess). Chess reached Europe by the 9th century, due to the Umayyad conquest of Hispania. The pieces assumed their current properties in Spain in the late 15th century, and the modern rules were standardized in the 19th century.

Play involves no hidden information. Each player begins with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. Each piece type moves differently, with the most powerful being the queen and the least powerful the pawn. The objective is to checkmate the opponent's king by placing it under an inescapable threat of capture. To this end, a player's pieces are used to attack and capture the opponent's pieces, while supporting one another. During the game, play typically involves exchanging pieces for the opponent's similar pieces, and finding and engineering opportunities to trade advantageously or to get a better position. In addition to checkmate, a player wins the game if the opponent resigns, or, in a timed game, runs out of time. There are also several ways that a game can end in a draw.Chess is a two-player strategy board game played on a checkered board with 64 squares arranged in an 8×8 grid. Played by millions of people worldwide, chess is believed to be derived from the Indian game chaturanga sometime before the 7th century. Chaturanga is also the likely ancestor of the East Asian strategy games xiangqi (Chinese chess), janggi (Korean chess), and shogi (Japanese chess). Chess reached Europe by the 9th century, due to the Umayyad conquest of Hispania. The pieces assumed their current properties in Spain in the late 15th century, and the modern rules were standardized in the 19th century.

Play involves no hidden information. Each player begins with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. Each piece type moves differently, with the most powerful being the queen and the least powerful the pawn. The objective is to checkmate the opponent's king by placing it under an inescapable threat of capture. To this end, a player's pieces are used to attack and capture the opponent's pieces, while supporting one another. During the game, play typically involves exchanging pieces for the opponent's similar pieces, and finding and engineering opportunities to trade advantageously or to get a better position. In addition to checkmate, a player wins the game if the opponent resigns, or, in a timed game, runs out of time. There are also several ways that a game can end in a draw.</p></div>
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

export default sport3;