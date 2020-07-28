import React from 'react';
import styles from './Pubs.css';

const Pubs = () => (
  <div className={styles.Pubs}>
    <div>
      <img src="CONSTITUTIONS.png" />
      <div>
        <div>
          <h5>Re:Constitutions<br />Connecting Citizens with the Rules of The Game</h5>
          <h6>Beka Feathers with art by Kasia Babis</h6>
          <button>BOOKSHOP</button>
          <button>AMAZON</button>
        </div>
        <div>Coming June 15, 2021</div>
      </div>

      <p></p>
      <p></p>
      <p></p>
      <p className={styles.review}></p>
    </div>
  </div>
);

export default Pubs;
