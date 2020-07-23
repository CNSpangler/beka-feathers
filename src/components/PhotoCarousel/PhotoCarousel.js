import React from 'react';
import { 
  CarouselProvider, 
  Slider, 
  Slide, 
  ButtonBack, 
  ButtonNext 
} from 'pure-react-carousel';
import imageData from './imageData.json';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './PhotoCarousel.css';

const photoElements = imageData.map(image => (
  <Slider className={styles.imageContainer} key={image.src} >
    <Slide>
      <img className={styles.image} src={image.src} />
    </Slide>
  </Slider>
));

const PhotoCarousel = () => (
  <CarouselProvider className={styles.PhotoCarousel} naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={photoElements.length}>
    {photoElements}
    <ButtonBack></ButtonBack>
    <ButtonNext></ButtonNext>
  </CarouselProvider>
);

export default PhotoCarousel;
