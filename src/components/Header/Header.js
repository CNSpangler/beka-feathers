import React, { useState, useRef } from 'react';
// import NavBar from '../NavBar/NavBar.js';
import styles from './Header.css';
import Burger from '../Hamburger/Burger/Burger.js';
import Menu from '../Hamburger/Menu/Menu';
import { useOnClickOutside } from '../../hooks';

const Header = () => {
  const [open, setOpen] = useState(false);

  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  
  return (
    <>
      <div className={styles.Header}>
        <div className={styles.banner}>
          <img src="header.png" />
        </div>
        <div ref={node}>
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
