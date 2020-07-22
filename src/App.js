import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/projects/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
