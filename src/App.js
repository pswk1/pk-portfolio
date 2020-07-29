import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/projects/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import './App.css';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
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
    </ThemeProvider>
  );
}

export default App;
