import React, { Component } from 'react';
import main from "./main";
import about from './about';
import contact from "./contact";
import login from "./login";
import games from './games';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

class Navigation extends Component{
    render(){
        // const history = createBrowserHistory();
      return (
        <div className="App">
          <header className="App-header">
            
            <Router>
              <Switch>
                <Route path={process.env.PUBLIC_URL +"/about"} component={about}/>
                {/* <Route exact path={process.env.PUBLIC_URL +"/projects"} component={portfolio}/> */}
                {/* <Route path={process.env.PUBLIC_URL +"/projects/:id"} component={display}/> */}
                <Route path={process.env.PUBLIC_URL +"/contact"} component={contact}/>
                <Route path={process.env.PUBLIC_URL +"/games"} component={games}/> 
                <Route exact path={process.env.PUBLIC_URL +"/"} component={main}/>
                <Route path={process.env.PUBLIC_URL +"/login"} component={login}/>
              </Switch> 
            </Router> 
            
          </header>
        </div>
      );
      }
}

export default Navigation;