import React from 'react';
import styles from './Contact.js';

const Contact = () => (
  <div className={StyleSheet.Contact}>
    <div className={styles.contactContainer}>

      <a href="mailto:beka.feathers@gmail.com" target="_blank" rel="noreferrer" className={styles.contactCard}>Email</a>

      <a href="mailto:beka.feathers@protonmail.com" target="_blank" rel="noreferrer" className={styles.contactCard}>Secure Email</a>

      <a href="https://twitter.com/messages/compose?recipient_id=106555952"
        data-screen-name="@feathersb">Twitter</a>

      <a href="https://join.skype.com/invite/DzcouHgYvc4o" className={styles.contactCard}>Skype</a>
    </div>
  </div>
);

export default Contact;
