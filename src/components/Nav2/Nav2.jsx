import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav2.css';
import logo from '../../images/splash_logo.png';

class Navbar extends Component {
  state = { clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
        <nav className="NavbarItems">
          <a href="/" className="navbar-logo"><img className="logo" src={logo} alt="logo"></img></a>
          <div className="menu-icon" onClick={this.handleClick }>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> 
            <li>
              <Link className='nav-links' to="/">
              Back To Home
              </Link>
            </li>
          </ul>
        </nav>
      )
  }
}

export default Navbar;
