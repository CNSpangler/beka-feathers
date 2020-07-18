import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="NavBar">
    <NavLink to="/" className="link-text">HOME</NavLink>
    <NavLink to="/services" className="link-text">SERVICES</NavLink>
    <a href="" className="link-text">CV</a>
    <NavLink to="/publications" className="link-text">PUBLICATIONS</NavLink>
    <NavLink to="/contact" className="link-text">CONTACT</NavLink>
  </div>
);

export default NavBar;
