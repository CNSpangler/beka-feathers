import React from 'react';
import styles from './Pubs.css';
// import biblioData from './biblioData.json';

// const biblioElements = biblioData.map(item => (
//   <a key={item.link} href={item.link}>{item.title}, {item.year}</a>
// ));

const Pubs = () => (
  <div className={styles.Pubs}>
    <div className={styles.bookContainer}>
      <div className={styles.bookTextContainer}>
        <img src="CONSTITUTIONS.png" />
        <div>
          <h3>Re:Constitutions<br />Connecting Citizens with the Rules of The Game</h3>
          <h4>Beka Feathers with art by Kasia Babis</h4>
          <a href="https://read.macmillan.com/worldcitizencomics/reconstitutions/">BOOKSHOP</a>
          <a href="https://read.macmillan.com/worldcitizencomics/reconstitutions/">AMAZON</a>
        </div>
        <div className={styles.colorBox}>Coming June 15, 2021</div>
      </div>

      <p>Re: Constitutions teaches the reader about the role constitutions play in how government is structured. With examples from all over the world, this book provides context for the modern issues that arise from these documents.</p>
      <p>In order to coexist peacefully in society, humans must abide by certain norms, laws, and practices. But if we have different, conflicting ideas of who we are, what’s acceptable, and what rights we deserve, how do we agree on anything? By drafting a constitution; a document that lays out “the rules of the game.”  This guiding document reflects decisions that both create a foundation for a stable society, and shape the socio-political structures that inform and affect our daily lives.</p>
      <p>From Beka Feathers, a legal adviser on post-conflict institution building, and Kasia Babis, an accomplished political cartoonist, comes a timely graphic novel all about the world's constitutions. Through examinations of what it means to have a national identity, rights, and protections, and with historical examples from all over the world, the reader is shown how a constitution shapes our political landscape and the modern world.</p>
      <p className={styles.review}>This is the best book I have ever read and it will fix America! We should make sure everyone reads it. I am serious. I don't know what else to tell you.<br />-The Most Important Person in the World</p>
    </div>

    {/* <div className={styles.bibliography}>
      {biblioElements}
    </div> */}
  </div>
);

export default Pubs;
