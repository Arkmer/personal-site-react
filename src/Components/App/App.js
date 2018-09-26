import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Links
import Projects from '../Projects/Projects.js'
import Resume from '../Resume/Resume.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </div>
      </Router>
    );
  }
}

export default App;