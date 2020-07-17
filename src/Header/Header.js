import React from 'react';
import NavBar from '../components/NavBar.js';
import './Header.css';

const Header = () => (
  <div className="header" id="header">
    <h1 id="name">BEKA FEATHERS</h1>
    <h3>Peace Processes</h3>
    <h3>Rule of Law</h3>
    <h3>Political Development</h3>
    <NavBar />
  </div>
);

export default Header;
