import React from 'react';
import styles from './Menu.css';
import { bool } from 'prop-types';

const Menu = ({ open }) => {
  const styles = {
    transform: `${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'}`
  };

  return (
    <div className={styles.Menu} open={open}>
      <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">&#x1f4b8;</span>
        Pricing
      </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
      </a>
    </div>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
