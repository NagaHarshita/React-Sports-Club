import React from 'react';
import './App.css';
import Main from "./components/main";
import Contact from "./components/contact";
import Login from "./components/login";
import about from "./components/about";
import interact from "./components/interact";
import games from "./components/games";
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
          <Switch>
            {/* 
            <Route exact path={process.env.PUBLIC_URL +"/projects"} component={portfolio}/>
            <Route path={process.env.PUBLIC_URL +"/projects/:id"} component={display}/> */}
            <Route path={process.env.PUBLIC_URL +"/about"} component={about}/>
            <Route path={process.env.PUBLIC_URL +"/contact"} component={Contact}/>
            <Route path={process.env.PUBLIC_URL +"/login"} component={Login}/>
            <Route exact path={process.env.PUBLIC_URL +"/"} component={Main}/>
            <Route exact path={process.env.PUBLIC_URL +"/interact"} component={interact}/>
            <Route exact path={process.env.PUBLIC_URL +"/games"} component={games}/>
          </Switch>
        </Router> 
    </div>
  );
}

export default App;
