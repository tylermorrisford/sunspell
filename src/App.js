import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from './components/Nav';
import Belt from './components/Belt';
import Footer from './components/Footer';

import './App.css';
import Home from './pages/Home'

export default function App() {
  return (
    <div className="App">
    <Router >
      <Navigation />
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/gear">
            <Gear />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Belt />
      <Footer />
    </Router>
    </div>
  );
}


function Gear() {
  return <h2>Gear</h2>;
}

function Services() {
  return <h2>Services</h2>;
}
function Contact() {
  return <h2>Contact</h2>;
}
function About() {
  return <h2>About Sunspell</h2>;
}
