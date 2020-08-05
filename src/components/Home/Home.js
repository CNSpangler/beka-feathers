import React from 'react';
import Collapsible from 'react-collapsible';
import styles from './Home.css';
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel';
import useDeviceDetect from '../../../utils/useDeviceDetect';

const Home = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <div className={styles.Home}>
      <div className={styles.bioContainer}>
        <div className={styles.bio}>
          <div className={styles.headshotContainer}>
            <img className={styles.headshot} src="headshot.jpg" alt="Beka Feathers smiling at the camera in an outdoor setting." />
          </div>

          <p>Beka Feathers is a legal adviser on post-conflict institution-building, specializing in constitution-drafting, transitional governments, and peace processes. She was most recently a contractor with the Bureau for Conflict & Stabilization Operations at the U.S. Department of State, where she provided conflict analysis and policy guidance on Yemen. Previously, she was Counsel with the Public International Law & Policy Group (PILPG), where she worked on projects in Yemen, South Sudan, Syria, Burma, Georgia, and Kosovo. She has advised clients on a range of issues, including constitution-drafting, post-conflict transitional governance, peace negotiations, judicial reform, and anti-corruption policy.</p>

          {isMobile 
            ? <Collapsible trigger="Read More..." className={styles.collapsible}>
              <p>Beka has also served as a legal adviser to the Montenegrin delegation to the United Nations Human Rights Council. In addition to her work with PILPG, she has done research on foreign agricultural investment for the Centre for Human Rights in South Africa; worked on parliamentary strengthening and democratic benchmarks for the National Democratic Institute; and developed education and transportation policy for the Oregon State Legislature.</p>

              <p>She is the author, along with artist Kasia Babis, of the forthcoming non-fiction graphic novel RE: CONSTITUTIONS: Connecting Citizens With the Rules of the Game (First Second Press).</p>
  
              <p>She is registered with the California Bar.</p>
            </Collapsible>
          
            : <div>
              <p>Beka has also served as a legal adviser to the Montenegrin delegation to the United Nations Human Rights Council. In addition to her work with PILPG, she has done research on foreign agricultural investment for the Centre for Human Rights in South Africa; worked on parliamentary strengthening and democratic benchmarks for the National Democratic Institute; and developed education and transportation policy for the Oregon State Legislature.</p>

              <p>She is the author, along with artist Kasia Babis, of the forthcoming non-fiction graphic novel RE: CONSTITUTIONS: Connecting Citizens With the Rules of the Game (First Second Press).</p>

              <p>She is registered with the California Bar.</p>
            </div>
          }

        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.carouselContainer}>
          <PhotoCarousel className={styles.carousel} />
        </div>
        <div className={styles.review}>
          <p>This is a heartfelt review about how amazing Beka Feathers is.</p>
          <p>-High Risk Wife / #1 Fan</p>
        </div>
        <div className={styles.review}>
          <p>This is a heartfelt review about how amazing Beka Feathers is.</p>
          <p>-Barack Obama</p>
        </div>
        <div className={styles.review}>
          <p>This is a heartfelt review about how amazing Beka Feathers is.</p>
          <p>-Basically Everyone</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
