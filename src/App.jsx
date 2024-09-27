import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
// components
import Navigation from './components/Nav';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
// This feels too good to be true, keeping these around for quick fallback
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Gear from './pages/Gear';
// import Services from './pages/Services';

// const Home = lazy(() => import('./pages/Home'))
const Gear = lazy(() => import('./pages/Gear'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Suspense
          fallback={
            <div style={{ textAlign: 'center', marginTop: '65px' }}>
              <Spinner animation='grow' />
            </div>
          }
        >
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/gear' component={Gear} />
            <Route path='/services' component={Services} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}
