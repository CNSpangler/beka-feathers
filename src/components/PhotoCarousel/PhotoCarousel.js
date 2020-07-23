import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import imageData from './imageData.json';
import styles from './PhotoCarousel.css';

const photoElements = imageData.map(image => (
  <div className={styles.imageContainer} key={image.src} >
    <img className={styles.image} src={image.src} />
  </div>
));

const PhotoCarousel = () => (
  <Carousel className={styles.PhotoCarousel} infiniteLoop useKeyboardArrows autoPlay interval="3000" showThumbs={false}showArrows={true}>{photoElements}</Carousel>
);

export default PhotoCarousel;
