import React from 'react';
import styles from './FlipCard.css';

const FlipCard = ({ title, description }) => (
  <div className={styles.FlipCard}>
    <div className={styles.flipCardContainer}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <h3>{title}</h3>
        </div>
        <div className={styles.flipCardBack}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default FlipCard;
