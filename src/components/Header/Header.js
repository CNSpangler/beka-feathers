import React from 'react';
// import NavBar from '../NavBar/NavBar.js';
import styles from './Header.css';
import Burger from '../Hamburger/Burger.js';

const Header = () => {
  
  return (
    <>
      <div className={styles.Header}>
        <div className={styles.banner}>
          <img src="header.png" />
        </div>
        <Burger />
        {/* <div id={styles.navContainer}>
        <NavBar />
      </div> */}
      </div>
    </>
  );
};

export default Header;
