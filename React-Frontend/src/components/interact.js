import React ,{ Component }  from 'react';
import Header from './header';
import '../css/interact.css';
import Footer from './footer';
//import {Navbar,Nav} from 'react-bootstrap';


class interact extends Component{
    openCity(evt, cityName) 
    {
      document.getElementById("defaultOpen").click(); 
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) 
      {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) 
      {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }
    // document.getElementById("defaultOpen").click(); 
    render() {
        return (
            <div>
              <style dangerouslySetInnerHTML={{__html: "\n      html, body \n{\nmargin: 0;\n}\n\n section\n{ \n  background-repeat: no-repeat;\n  font-family: 'Oswald' sans-serif;\n  background-attachment: fixed;\n  background-size: 100% 100%;\n  padding:0px;\n  box-sizing: border-box;\n  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);\n}\n\n.col-sm-4{\n\talign-content: center;\n\talign-items: center;\n}\n\n.tab\n{\n\tmargin-bottom: 10px;\n\tmargin-top: 20px;\n}\n.tab button {\n  /*background-color: inherit;*/\n  font-size: 20px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n}\n\n/* Change background color of buttons on hover */\n.tab button \n{\n\tpadding-left: 50%;\n  background-color: orange;\n  color: black;\n}\n\n.tab button:hover{\n\tbackground-color: #3AAFA9;\n\tcolor: black;\n}\n/* Create an active/current tablink class */\n.tab button.active {\n  background-color:#3AAFA9 ;\n  color: white;\n}\n\n/* Style the tab content */\n.tabcontent {\n  display: none;\n  padding: 6px 12px;\n  border-top: none;\n}\t\n\n\nh1\n{\n\tcolor: black;\n\tfont-weight: bold;\n\tmargin-left: 30px;\n}\nh2\n{\n\tmargin-top: 150px;\n\tmargin-left: 150px;\n\tfont-style: italic;\n\tfont-weight: bold;\n\tfont-size: 40px;\n\tline-height: 50px;\n\tcolor: white;\n}\n\n\n.card{\n\tbox-shadow: 5px 5px 5px black;\n\tborder-radius: 10px;\n}\n.card-title{\n\ttext-align: center;\n}\n\n\n.btn\n{\n\tbackground-color: orange;\n\talign-self: center;\n}\n\n.btn:hover\n{\n\tbackground-color: #3AAFA9;\n\tcolor: black;\n}\n\n  " }} />
              <Header/>
              <br/><br/><br/><br/>
              <section>
                <br />
                
                <div className="tab">
                  <div className="row">
                    <div className="col-sm-4"><button className="tablinks" onclick="openCity(event, '1st day')" id="defaultOpen">28/02/2020</button></div>
                    <div className="col-sm-4"><button className="tablinks" onclick="openCity(event, '2nd day')">29/02/2020</button></div>
                    <div className="col-sm-4"><button className="tablinks" onclick="openCity(event, '3rd day')">01/03/2020</button></div>
                  </div>
                </div>
                <div id="1st day" className="tabcontent">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="card">
                        <div className="card-body">
                          <img className="card-img-top" src="/images/cover_image.jpg" style={{width: '100%', height: '80%'}} alt="Card image cap" />
                          <h5 className="card-title">4:00 pm to 4:45 pm</h5>
                          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <div className="text-center">
                            <a href="#" className="btn">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card">
                        <div className="card-body">
                          <img className="card-img-top" src="/images/cover_image.jpg" style={{width: '100%', height: '80%'}} alt="Card image cap" />
                          <h5 className="card-title">4:45 pm to 5:30 pm</h5>
                          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <div className="text-center">
                            <a href="#" className="btn">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card">
                        <div className="card-body">
                          <img className="card-img-top" src="/images/cover_image.jpg" style={{width: '100%', height: '80%'}} alt="Card image cap" />
                          <h5 className="card-title">5:30 pm to 6:15 pm</h5>
                          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <div className="text-center">
                            <a href="#" className="btn">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="2nd day" className="tabcontent">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="card">
                        <div className="card-body">
                          <img className="card-img-top" src="/images/cover_image.jpg" style={{width: '100%', height: '80%'}} alt="Card image cap" />
                          <h5 className="card-title">4:00 pm to 4:45 pm</h5>
                          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <div className="text-center">
                            <a href="#" className="btn">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card">
                        <div className="card-body">
                          <img className="card-img-top" src="/images/cover_image.jpg" style={{width: '100%', height: '80%'}} alt="Card image cap" />
                          <h5 className="card-title">4:45 pm to 5:30 pm</h5>
                          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <div className="text-center">
                            <a href="#" className="btn">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card">
                        <div className="card-body">
                          <img className="card-img-top" src="/images/cover_image.jpg" style={{width: '100%', height: '80%'}} alt="Card image cap" />
                          <h5 className="card-title">5:30 pm to 6:15 pm</h5>
                          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <div className="text-center">
                            <a href="#" className="btn">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="3rd day" className="tabcontent">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="card">
                        <div className="card-body">
                          <img className="card-img-top" src="/images/cover_image.jpg" style={{width: '100%', height: '80%'}} alt="Card image cap" />
                          <h5 className="card-title">4:00 pm to 4:45 am</h5>
                          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <div className="text-center">
                            <a href="#" className="btn">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card">
                        <div className="card-body">
                          <img className="card-img-top" src="/images/cover_image.jpg" style={{width: '100%', height: '80%'}} alt="Card image cap" />
                          <h5 className="card-title">4:45 pm to 5:30 pm</h5>
                          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <div className="text-center">
                            <a href="#" className="btn">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card">
                        <div className="card-body">
                          <img className="card-img-top" src="/images/cover_image.jpg" style={{width: '100%', height: '80%'}} alt="Card image cap" />
                          <h5 className="card-title">5:30 pm to 6:15 pm</h5>
                          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <div className="text-center">
                            <a href="#" className="btn">Book Now</a>
                          </div>
                          <br /><br /><br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Footer />
            </div>
          
        
     
     
);
          

       


    }
}

export default interact;