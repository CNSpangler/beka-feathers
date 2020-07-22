import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import styles from './Header.css';

const Header = () => (
  <>
    <div className={styles.Header}>
      <h1 id={styles.name}>BEKA FEATHERS</h1>
      <div id={styles.subheadContainer}>
        <h3 className={styles.subhead}>Peace Processes</h3>
        <h3 className={styles.subhead}>Rule of Law</h3>
      </div>
      <h3 className={styles.subhead3}>Political Development</h3>
      <NavBar />
    </div>
  </>
);

export default Header;
