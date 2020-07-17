import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <>
    <NavLink to="/">HOME</NavLink>
    <NavLink to="/services">SERVICES</NavLink>
    <a href="">CV</a>
    <NavLink to="/publications">PUBLICATIONS</NavLink>
    <NavLink to="/contact">CONTACT</NavLink>
  </>
);

export default NavBar;
