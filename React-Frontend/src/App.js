import React, {useState} from 'react';
import './App.css';
import Main from "./components/main";
import Contact from "./components/contact";
import Login from "./components/login";
import about from "./components/about";
import interact from "./components/interact";
import games from "./components/games";

import profile from "./components/profile";
import sport1 from "./components/sport1";
import sport2 from "./components/sport2";
import sport3 from "./components/sport3";
import sport4 from "./components/sport4";
import sport5 from "./components/sport5";
import sport6 from "./components/sport6";
import sport7 from "./components/sport7";
import sport8 from "./components/sport8";
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
// import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
import book from './components/book'





import forpass from "./components/forpass";
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
            <Route exact path={process.env.PUBLIC_URL +"/profile"} component={profile}/>
            <Route exact path={process.env.PUBLIC_URL +"/sport1"} component={sport1}/>
            <Route exact path={process.env.PUBLIC_URL +"/sport2"} component={sport2}/>
            <Route exact path={process.env.PUBLIC_URL +"/sport3"} component={sport3}/>
            <Route exact path={process.env.PUBLIC_URL +"/sport4"} component={sport4}/>
            <Route exact path={process.env.PUBLIC_URL +"/sport5"} component={sport5}/>
            <Route exact path={process.env.PUBLIC_URL +"/sport6"} component={sport6}/>
            <Route exact path={process.env.PUBLIC_URL +"/sport7"} component={sport7}/>
            <Route exact path={process.env.PUBLIC_URL +"/sport8"} component={sport8}/>

            <Route exact path={process.env.PUBLIC_URL +"/forpass"} component={forpass}/>


            <Route path={process.env.PUBLIC_URL +"/book"} component={book}/>
           

          </Switch>
        </Router> 
    </div>
  );
}

export default App;
