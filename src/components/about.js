import React ,{ Component }  from 'react';
import '../css/about.css';
import Header from './header';
import Footer from './footer';

class about extends Component{
    render() {
    
                  return (
                    
                    <div>
                        <Header/>
                      <style dangerouslySetInnerHTML={{__html: "\n    body, html {\n      height: 100%;\n    }\n\n.parallax-one{\n    background-image: url('images/SOCCER.png');\n    height: 1000%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n}\n\n  " }} />
                      <div id="parallax-world-of-ugg">
                        <section>
                          <div style={{background: 'white', paddingTop: '100px', margin: '0 auto', textAlign: 'center'}}>
                            <h3>Let's do some</h3>
                            <h1 style={{fontSize: '35px', letterSpacing: '8px'}}>PARALLAX</h1>
                          </div>
                        </section>
                        <section>
                          <div className="parallax-one" style={{}}>
                            <h2>ARENA</h2>
                          </div>
                        </section>
                        <section style={{backgroundColor:"grey"}}>
                          <div className="block">
                            <p><span className="first-character sc">I</span>n 1978, Brian Smith landed in Southern California with a bag of sheepskin boots and hope. He fell in love with the sheepskin experience and was convinced the world would one day share this love. The beaches of Southern California had long been an epicenter of a relaxed, casual lifestyle, a lifestyle that Brian felt was a perfect fit for his brand. So he founded the UGG brand, began selling his sheepskin boots and they were an immediate sensation. By the mid 1980's, the UGG brand became a symbol of relaxed southern California culture, gaining momentum through surf shops and other shops up and down the coast of California, from San Diego to Santa Cruz. UGG boots reached beyond the beach, popping up in big cities and small towns all over, and in every level of society. Girls wore their surfer boyfriend's pair of UGG boots like a letterman jacket. When winter came along, UGG boots were in ski shops and were seen in lodges from Mammoth to Aspen.</p>
                            <p className="line-break margin-top-10" />
                            <p className="margin-top-10">The UGG brand began to symbolize those who embraced sport and a relaxed, active lifestyle. More than that, an emotional connection and a true feeling of love began to grow for UGG boots, just as Brian had envisioned. People didn't just like wearing UGG boots, they fell in love with them and literally could not take them off. By the end of the 90's, celebrities and those in the fashion world took notice of the UGG brand. A cultural shift occurred as well - people were embracing, and feeling empowered, by living a more casual lifestyle and UGG became one of the symbols of this lifestyle. By 2000, a love that began on the beaches had become an icon of casual style. It was at this time that the love for UGG grew in the east, over the Rockies and in Chicago. In 2000, UGG Sheepskin boots were first featured on Oprah's Favorite Things® and Oprah emphatically declared that she "LOOOOOVES her UGG boots." From that point on, the world began to notice.</p>
                          </div>
                        </section>
                        <section>
                          <div className="parallax-two">
                            <h2>NEW YORK</h2>
                          </div>
                        </section>
                        <section style={{backgroundColor:"grey"}}>
                          <div className="block">
                            <p><span className="first-character ny">B</span>reaking into the New York fashion world is no easy task. But by the early 2000's, UGG Australia began to take it by storm. The evolution of UGG from a brand that made sheepskin boots, slippers, clogs and sandals for an active, outdoor lifestyle to a brand that was now being touted as a symbol of a stylish, casual and luxurious lifestyle was swift. Much of this was due to a brand repositioning effort that transformed UGG into a high-end luxury footwear maker. As a fashion brand, UGG advertisements now graced the pages of Vogue Magazine as well as other fashion books. In the mid 2000's, the desire for premium casual fashion was popping up all over the world and UGG was now perfectly aligned with this movement.</p>
                            <p className="line-break margin-top-10" />
                            <p className="margin-top-10">Fueled by celebrities from coast to coast wearing UGG boots and slippers on their downtime, an entirely new era of fashion was carved out. As a result, the desire and love for UGG increased as people wanted to go deeper into this relaxed UGG experience. UGG began offering numerous color and style variations on their sheepskin boots and slippers. Cold weather boots for women and men and leather casuals were added with great success. What started as a niche item, UGG sheepskin boots were now a must-have staple in everyone's wardrobe. More UGG collections followed, showcasing everything from knit boots to sneakers to wedges, all the while maintaining that luxurious feel UGG is known for all over the world. UGG products were now seen on runways and in fashion shoots from coast to coast. Before long, the love spread even further.</p>
                          </div>
                        </section>
                    
                       </div>
                       <Footer />
                     </div>
                  );
                }
              };
            

export default about;