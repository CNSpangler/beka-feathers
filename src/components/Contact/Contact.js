import React from 'react';
import styles from './Contact.css';

const Contact = () => (
  <div className={styles.Contact}>
    <div className={styles.contactCard}>
      <a href="mailto:beka.feathers@gmail.com" target="_blank" rel="noreferrer">Email</a>
    </div>

    <div className={styles.contactCard}>
      <a href="mailto:beka.feathers@protonmail.com" target="_blank" rel="noreferrer" className={styles.contactCard}>Secure Email</a>
    </div>

    <div className={styles.contactCard}>
      <a href="https://twitter.com/messages/compose?recipient_id=106555952"
        data-screen-name="@feathersb">Twitter</a>
    </div>

    <div className={styles.contactCard}>
      <a href="https://join.skype.com/invite/DzcouHgYvc4o" className={styles.contactCard}>Skype</a>
    </div>
  </div>
);

export default Contact;
