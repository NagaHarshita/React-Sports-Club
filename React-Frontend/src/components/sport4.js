import React ,{ Component }  from 'react';
import Header from './header';
import Footer from './footer';
import '../css/style.css';



class sport4 extends Component
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
                    <h1>Carroms</h1>
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
                      <img src="images/carroms.jpeg" style={{width: '700px', height: '500px', alignItems: '”right”', paddingTop: '20px'}} /></div>
                  </div>
                  <div style={{padding: '20px'}}>
                    <p>Carrom (also spelled carom/carroms) is a tabletop game of Indian origin. The game is very popular in South Asia and the Middle East, 
                      and is known by various names in different languages. In South Asia, many clubs and cafés hold regular tournaments. Carrom is very commonly played by families, 
                      including children, and at social functions. Different standards and rules exist in different areas. It became very popular in United Kingdom and the Commonwealth realms during the early 20th century.Carrom (also spelled carom/carroms) is a tabletop game of Indian origin. The game is very popular in South Asia and the Middle East, and is known by various names in different languages. In South Asia, many clubs and cafés hold regular tournaments. Carrom is very commonly played by families, including children, and at social functions. Different standards and rules exist in different areas. It became very popular in United Kingdom and the Commonwealth realms during the early 20th century.Carrom (also spelled carom/carroms) is a tabletop game of Indian origin. The game is very popular in South Asia and the Middle East, and is known by various names in different languages. In South Asia, many clubs and cafés hold regular tournaments. Carrom is very commonly played by families, including children, and at social functions. Different standards and rules exist in different areas. It became very popular in United Kingdom and the Commonwealth realms during the early 20th century.Carrom (also spelled carom/carroms) is a tabletop game of Indian origin. The game is very popular in South Asia and the Middle East, and is known by various names in different languages. In South Asia, many clubs and cafés hold regular tournaments. Carrom is very commonly played by families, including children, and at social functions. Different standards and rules exist in different areas. It became very popular in United Kingdom and the Commonwealth realms during the early 20th century.</p></div>
                  <div className="card-mid" />
                  <div className="card-bottom"><a href={process.env.PUBLIC_URL +"/interact"}  className="borders-btn">Get Started</a></div>
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

export default sport4;