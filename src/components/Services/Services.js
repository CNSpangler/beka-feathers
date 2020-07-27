import React from 'react';
import FlipCard from '../FlipCard/FlipCard';
import servicesData from './servicesData.json';
import styles from './Services.css';

const flipElements = servicesData.map(service => (
  <FlipCard key={service.title}>{service.title}</FlipCard>
));

const Services = () => (
  <div className={styles.Services}>
    <h2>services coming soon</h2>
    <div className={styles.flipCards}>
      {flipElements}
    </div>
  </div>
);

export default Services;
