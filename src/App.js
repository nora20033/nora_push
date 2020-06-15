import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Naslovna from './Components/Naslovna.js';
import Pocetna from './Components/Pocetna';
import Hiperveza from './Components/Hiperveza';
import Nova from './Components/Nova';
import Prva from './Components/Prva';
import Druga from './Components/Druga';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div>

      <Header></Header>

      <Router>
        <Route exact path = "/" component = {Naslovna}></Route>
        <Route path = "/Pocetna" component = {Pocetna}></Route>
        <Route path = "/Hiperveza" component = {Hiperveza}></Route>
        <Route path = "/Nova" component = {Nova}></Route>
        <Route path = "/Prva" component = {Prva}></Route>
        <Route path = "/Druga" component = {Druga}></Route>


        

      </Router>
      
      <Footer> </Footer>
    </div>
  );
}

export default App;
