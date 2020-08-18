import React from 'react';
import Carousel from 'nuka-carousel';
import styles from './ReviewCarousel.css';


const ReviewCarousel = ({ reviewElements }) => (
  <div className={PhotoCarousel}>
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
      {reviewElements}
    </Carousel>
  </div>
);

export default ReviewCarousel;
