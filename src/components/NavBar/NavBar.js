import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.css';

const NavBar = () => (
  <div className={styles.NavBar}>
    <NavLink to="/" className={styles.linkText} activeClassName={styles.selected}>HOME</NavLink>
    <NavLink to="/services" className={styles.linkText} activeClassName={styles.selected}>SERVICES</NavLink>
    <a href="" className={styles.linkText}>CV</a>
    <NavLink to="/publications" className={styles.linkText} activeClassName={styles.selected}>PUBLICATIONS</NavLink>
    <NavLink to="/contact" className={styles.linkText} activeClassName={styles.selected}>CONTACT</NavLink>
  </div>
);

export default NavBar;
