import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import styles from './Header.css';

const Header = () => (
  <>
    <div className={styles.Header}>
      <div className={styles.banner}>
        <img src="header.png" />
      </div>
      <div id={styles.navContainer}>
        <NavBar />
      </div>
    </div>
  </>
);

export default Header;
