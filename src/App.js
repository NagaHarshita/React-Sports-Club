import React from 'react';
import './App.css';
import Main from "./components/main";
import Contact from "./components/contact";
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
          <Switch>
            {/* <Route path={process.env.PUBLIC_URL +"/about"} component={about}/>
            <Route exact path={process.env.PUBLIC_URL +"/projects"} component={portfolio}/>
            <Route path={process.env.PUBLIC_URL +"/projects/:id"} component={display}/> */}
            <Route path={process.env.PUBLIC_URL +"/contact"} component={Contact}/>
            {/* <Route path={process.env.PUBLIC_URL +"/interests"} component={interests}/>  */}
            <Route exact path={process.env.PUBLIC_URL +"/"} component={Main}/>
          </Switch>
        </Router> 
    </div>
  );
}

export default App;
