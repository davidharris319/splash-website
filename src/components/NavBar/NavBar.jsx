import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-scroll';
import './NavBar.css';
import logo from '../../images/splash_logo.png';

import iglogo from '../../images/instagram.svg';

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
            {MenuItems.map((item, index) =>{
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url} smooth={true} offset={-120} duration={1000}>
                  {item.title}
                  </Link>
                </li>
              )
            })}
            <a href="/" className="social-icon"><img className="logo" src={iglogo} alt="logo"></img></a>
          </ul>
        </nav>
      )
  }
}

export default Navbar;

