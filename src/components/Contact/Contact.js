import React from 'react';
import styles from './Contact.css';

const Contact = () => (
  <div className={styles.Contact}>
    <div className={styles.cardContainer}>
      <div className={styles.contactCard}>
        <a 
          href="mailto:beka.feathers@gmail.com" 
          target="_blank" 
          rel="noreferrer"
        >
          <img src="email.png" />
          Email
        </a>
      </div>

      <div className={styles.contactCard}>
        <a 
          href="mailto:beka.feathers@protonmail.com" target="_blank" 
          rel="noreferrer"
        >
          <img src="caps-lock.png" />
          Protonmail
        </a>
      </div>

      <div className={styles.contactCard}>
        <a 
          href="https://twitter.com/messages/compose?recipient_id=106555952"
          data-screen-name="@feathersb"
          target="_blank"
          rel="noreferrer"
        >
          <img src="twitter.png" />
          Twitter
        </a>
      </div>

      <div className={styles.contactCard}>
        <a 
          href="https://join.skype.com/invite/DzcouHgYvc4o"
          target="_blank" 
          rel="noreferrer"
        >
          <img src="skype.png" />
          Skype
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
