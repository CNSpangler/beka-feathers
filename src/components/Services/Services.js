import React from 'react';
import FlipCard from '../FlipCard/FlipCard';
import servicesData from './servicesData.json';
import styles from './Services.css';

const flipElements = servicesData.map(service => (
  <FlipCard key={service.title} title={service.title} description={service.description}>{service.title}</FlipCard>
));

const Services = () => (
  <div className={styles.Services}>
    <div className={styles.philContainer}>
      <h5>Work Philosophy:</h5>
      <p>I am an expert. You can call the UN and ask them, they will confirm. Or I can send you a photo of my official expert badge. Please do not question me.</p>
    </div>
    <h4>SERVICES:</h4>
    <div className={styles.flipCards}>
      {flipElements}
    </div>
    <div className={styles.polDev}>
      <h4>What is Political Development?</h4>
      <p>I am an expert. You can call the UN and ask them, they will confirm. Or I can send you a photo of my official expert badge. Please do not question me.</p>
    </div>
  </div>
);

export default Services;
