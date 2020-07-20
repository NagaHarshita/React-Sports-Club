import React ,{ Component }  from 'react';
import Header from './header';
// import {Navbar,Nav} from 'react-bootstrap';


class contact extends Component{
    render() {
        return(

            <div style={{backgroundColor:"white"}}>
              <Header/>
           
            <div className="site-section" >
              <h1 style={{marginTop:'40px'}}>Contact us</h1>
              <div className="container2" style={{margin:'100px'}}>
                <div className="row" style={{marginTop:'200px'}}>

                  <div className="col-lg-7">
                    <form action="#">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject" />
                      </div>
                      <div className="form-group">
                        <textarea name className="form-control" id cols={30} rows={10} placeholder="Write something..." defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <input type="submit" className="btn btn-primary py-3 px-5" defaultValue="Send Message" />
                      </div>
                    </form>  
                  </div>
                  <div className="col-lg-4 ml-auto">
                  <div>
                            <img src="images/office.jpeg" style={{width: '700px', height: '400px'}} /></div>
                        </div>
                  </div>
                </div>
              </div>
              <div className="map" style={{marginBottom:'50px',marginTop:'-100px',backgroundColor:'white'}}>
        <div className="container" style={{backgroundColor:'white',width:'100%'}}>
          <div className="row justify-content-center">
            <div className="col-xl-11 col-lg-11 col-md-10 ">
              {/* Section Tittle */}
              <div className="section-tittle text-center mb-90">
                <h2>Cloud Load Balancing</h2>
                <p>Deploy your service infrastructure on our fully redundant, high performance cloud platform and benefit from its high reliability, security and enterprise feature set.
                </p>
              </div>
            </div>
          </div>
          <div className="map">
            <div className="row">
              <div className="col-xl-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786539269224!2d55.27218771500953!3d25.197196983896188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sbd!4v1588690958350!5m2!1sen!2sbd" width="100%" height={600} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
              </div>
            </div>
          </div>
        </div>
      </div>

            </div>
  
        );
    }
}

export default contact;