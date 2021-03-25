import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './Styles/App.css'
import  NavBar  from  './components/NavBar'

import Home from './components/Pages/Home'
import AboutUs from './components/Pages/AboutUs'
import Categories from './components/Pages/Categories'
import Contact from './components/Pages/Contact'

import Page from './components/Page'
import {FooterF} from './components/Footer'

export const App = () => {


  return (
    
    <>
    <Router>
      <NavBar />
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/aboutus" component={AboutUs}/>
        <Route path="/categories" component={Categories}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      
    </Router>
    <FooterF/>

    </>
  );
}


