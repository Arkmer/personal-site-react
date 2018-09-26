import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
  render() {
    return (
        <header className="App-header">
            <h1 className="App-title">Ryan Udelhoven</h1>
            <div className="navBar">
                <Link to="/projects" className="navLink">Projects</Link>&nbsp; &nbsp; &nbsp; &nbsp;
                <Link to="/resume" className="navLink">Resume</Link>
            </div>
        </header>
    );
  }
}

export default Header;