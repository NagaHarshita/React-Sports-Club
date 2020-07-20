import React ,{ Component }  from 'react';
import Header from './header';
import '../css/forpass.css';
import Footer from './footer';
//import {Navbar,Nav} from 'react-bootstrap';


class forpass extends Component{
    render() {
        return (
            <div>
                <Header/>
              <link type="text/css" rel="stylesheet" href="pass.css" />
              <div className="login-box">
                <h2>Forgot Password</h2>
                <form>
                  <div className="user-box">
                    <input type="email" name required />
                    <label>Email</label>
                  </div>
                  <div className="user-box">
                    <label />
                  </div>
                  <a href="#">
                    <span />
                    <span />
                    <span />
                    <span />
                    Submit
                  </a>
                </form>
              </div>
            </div>
          );
    }
}

export default forpass;