import React ,{ Component }  from 'react';
import Header from './header';
import '../css/about.css';
import '../css/login.css';
import Footer from './footer';
//import {Navbar,Nav} from 'react-bootstrap';


class login extends Component{
    render() {
        return(
                    <div>
                        <Header/>
                      <style dangerouslySetInnerHTML={{__html: "\nbody, html {\n  background: linear-gradient(#30cfd0,#b6b6b4);\n  height: 100%;\n}\n\n.container-fluid\n{\n  /* background-color:#30cfd0; */\n  width:100%;\n  border-bottom-style: solid;\n  border-bottom-color: #330867;\n  border-bottom-width: 4px;\n}\n\n\n#parallax-world-of-ugg h2 .text-center{\n  color: blue;\n}\n.body-c\n{\n  padding : 80px 0;\n}\n.container1\n{\n  background-color: #fff;\n  border-radius: 10px; \n  box-shadow:15px 20px 0px rgba(0,0,0,0.1);\n  padding:0px;\n}\n@media(min-width:768px){\n  .container1{\n    display: flex;\n  }\n}\n.form-control{\n    box-shadow: 5px 5px #c2c2c2;\n}\n\n.login-sec{padding: 50px 30px; position:relative;}\n.login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}\n.login-sec .copy-text i{color:#FEB58A;}\n.login-sec .copy-text a{color:#E36262;}\n.login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #330867;}\n.login-sec h2:after{content:\" \"; width:100px; height:5px; background:#30cfd0; display:block; margin-top:20px; border-radius:3px; margin-left:auto;margin-right:auto}\n.btn-login{background: #330867; color:#fff; font-weight:600;}\n\n" }} />
                      <div id="parallax-world-of-ugg">

                        <section>
                          <div className="body-c">
                            <div className="container1">
                              <div className="col-md-6 login-sec">
                                <h1 className="text-center">Login Now</h1>
                                <br />
                                <form className="login-form" method="POST">

                                  <div className="form-group">
                                     <label for="exampleInputEmail1" class="text-uppercase">Username</label> 
                                    <input type="text" className="form-control" placeholder name="username" />
                                  </div>
                                  <div className="form-group">
                                     <label for="exampleInputPassword1" class="text-uppercase">Password</label> 
                                    <input type="password" className="form-control" placeholder name="password" />
                                  </div>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input type="checkbox" className="form-check-input" />
                                      <small>Remember Me</small>
                                    </label>
                                    <br />
                                    <label style={{float:"right"}}>
                                      <a href="{% url 'password_reset' %}">Forgot password?</a>
                                    </label>
                                    <br />
                                    <br />
                                    <button type="submit" className="btn btn-login ">Login</button>
                                  </div>
                                </form>
                              </div>
                              <div className="col-md-6">
                                <img src="/images/bg_2.jpg" style={{width: '100%'}} />	
                              </div>
                            </div>
                          </div>
                        </section>
                        
                      </div>
                      <Footer />
                    </div>
                  
            
              );

       


    }
}

export default login;