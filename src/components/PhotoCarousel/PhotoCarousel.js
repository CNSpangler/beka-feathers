import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import imageData from './imageData.json';

const photoElements = imageData.map(image => (
  <div>
    <img src={image.src} />
  </div>
));

const PhotoCarousel = () => (
  <Carousel showArrows={true}>{photoElements}</Carousel>
);

export default PhotoCarousel;
