import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
// components
import Navigation from './components/Nav';
import Footer from './components/Footer';
// pages, base route not lazy loaded
import Home from './pages/Home';
// This feels too good to be true, keeping these around for quick fallback
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Gear from './pages/Gear';
// import Services from './pages/Services';

// const Home = lazy(() => import('./pages/Home'))
const Gear = lazy(() => import('./pages/Gear'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Links = lazy(() => import('./pages/Links'));

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
            <Route path='/about' component={About} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/links' component={Links} />
            <Route path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}
