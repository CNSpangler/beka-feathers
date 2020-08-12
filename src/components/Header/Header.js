import React, { useState } from 'react';
// import NavBar from '../NavBar/NavBar.js';
import styles from './Header.css';
import Burger from '../Hamburger/Burger.js';
import Menu from '../Hamburger/Menu';

const Header = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <div className={styles.Header}>
        <div className={styles.banner}>
          <img src="header.png" />
        </div>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        {/* <div id={styles.navContainer}>
        <NavBar />
      </div> */}
      </div>
    </>
  );
};

export default Header;
