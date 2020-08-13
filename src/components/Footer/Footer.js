import React from 'react';
import styles from './Footer.css';

const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.contact}>
      <img src="twitter.png" />
      <a href="https://twitter.com/feathersb?lang=en" target="_blank" rel="noreferrer">Twitter</a>
    </div>

    <div className={styles.contact}>
      <img src="linkedin.png" />
      <a href="https://www.linkedin.com/in/beka-feathers-53b3b71a/" target="_blank" rel="noreferrer">LinkedIn</a>
    </div>

    <div className={styles.contact}>
      <img src="email.png" />
      <a href="mailto:bfeathers@poldev.org" target="_blank" rel="noreferrer">Email</a>
    </div>
  </div>
);

export default Footer;
