import React from 'react';
import Carousel from 'nuka-carousel';
import imageData from './imageData.json';
import styles from './PhotoCarousel.css';

const photoElements = imageData.map(image => (
  <div className={styles.imageContainer} key={image.src} >
    <img className={styles.image} src={image.src} />
  </div>
));

const PhotoCarousel = () => (
  <Carousel className={styles.PhotoCarousel} >{photoElements}</Carousel>
);

export default PhotoCarousel;
