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
  <div>
    <Carousel 
      className={styles.PhotoCarousel} 
      autoplay={true} 
      autoplayInterval={2300}
      defaultControlsConfig={{ 
        prevButtonStyle: {
          display: 'none'
        },
        nextButtonStyle: {
          display: 'none'
        },
        pagingDotsStyle: {
          display: 'none'
        }
      }}
      enableKeyboardControls={true}
      transitionMode="fade"
      width="60%"
      wrapAround={true}
    >
      {photoElements}
    </Carousel>
  </div>
);

export default PhotoCarousel;
