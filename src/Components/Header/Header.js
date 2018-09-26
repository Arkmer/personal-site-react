import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'projects',
        }
    }

    componentDidMount(){
        console.log(window.location.href);
    }

    handleClick = (input) => (event) => {
        console.log(input);
    }

  render() {
    return (
        <header className="App-header">
            <h1 className="App-title">Ryan Udelhoven</h1>
            <div className="navBar">
                <Link to="/projects" className="navLink" onClick={this.handleClick('projects')}>Projects</Link>
                <Link to="/resume" className="navLink" onClick={this.handleClick('resume')}>Resume</Link>
            </div>
        </header>
    );
  }
}

export default Header;

// &nbsp; &nbsp; &nbsp; &nbsp;