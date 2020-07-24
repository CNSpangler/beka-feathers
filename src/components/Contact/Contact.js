import React from 'react';
import styles from './Contact.css';

const Contact = () => (
  <div className={styles.Contact}>
    <div className={styles.cardContainer}>
      <div className={styles.contactCard}>
        <img src="email.png" />
        <a href="mailto:beka.feathers@gmail.com" target="_blank" rel="noreferrer">Email</a>
      </div>

      <div className={styles.contactCard}>
        <img src="caps-lock.png" />
        <a href="mailto:beka.feathers@protonmail.com" target="_blank" rel="noreferrer" >Secure Email</a>
      </div>

      <div className={styles.contactCard}>
        <img src="twitter.png" />
        <a href="https://twitter.com/messages/compose?recipient_id=106555952"
          data-screen-name="@feathersb">Twitter</a>
      </div>

      <div className={styles.contactCard}>
        <img src="skype.png" />
        <a href="https://join.skype.com/invite/DzcouHgYvc4o">Skype</a>
      </div>
    </div>
  </div>
);

export default Contact;
