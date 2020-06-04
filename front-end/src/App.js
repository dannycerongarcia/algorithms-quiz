import React from 'react';
import logo from './logo.svg';
import './App.css';
// importing libraries
//  import {Redirect} from 'react-router-dom';

import {Switch,Route,Link, Redirect} from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';

import {connect} from 'react-redux';

// importing pages
import Login from "./components/Login";
import Home from "./components/Home";
import Reguister from "./components/Reguister";


function App() {
  return (
    <div className="App">
      {/* <div>
        <Link to="/">Login</Link>
      </div> */}

      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/reguister' component={Reguister}></Route>
      </Switch>
    </div>
  );
}

export default App;
