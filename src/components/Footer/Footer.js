import React from 'react';
import styles from './Footer.css';

const Footer = () => (
  <div className={styles.Footer}>
    <a href="https://twitter.com/feathersb?lang=en" target="_blank" rel="noreferrer">Twitter</a>
    <span>|</span>
    <a href="https://www.linkedin.com/in/beka-feathers-53b3b71a/" target="_blank" rel="noreferrer">LinkedIn</a>
    <span>|</span>
    <a href="mailto:beka.feathers@gmail.com" target="_blank" rel="noreferrer">Email</a>
  </div>
);

export default Footer;
