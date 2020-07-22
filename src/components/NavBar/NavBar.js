import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.css';

const NavBar = () => (
  <div className={styles.NavBar}>
    <NavLink to="/" className="link-text home">HOME</NavLink>
    <NavLink to="/services" className="link-text services">SERVICES</NavLink>
    <a href="" className="link-text cv">CV</a>
    <NavLink to="/publications" className="link-text publications">PUBLICATIONS</NavLink>
    <NavLink to="/contact" className="contact">CONTACT</NavLink>
  </div>
);

export default NavBar;
