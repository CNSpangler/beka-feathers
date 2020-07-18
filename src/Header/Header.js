import React from 'react';
import NavBar from '../components/NavBar.js';
import styles from './Header.css';

const Header = () => (
  <>
    <div className={styles.Header}>
      <h1 id={styles.name}>BEKA FEATHERS</h1>
      <h3>Peace Processes</h3>
      <h3>Rule of Law</h3>
      <h3>Political Development</h3>
      <NavBar />
    </div>
  </>
);

export default Header;
