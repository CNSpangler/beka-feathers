import React from 'react';
import FlipCard from '../FlipCard/FlipCard';
import servicesData from './servicesData.json';

const flipElements = servicesData.map(service => (
  <FlipCard key={service.title}>{service.title}</FlipCard>
));

const Services = () => (
  <>
    <h2>services coming soon</h2>
    <div>
      {flipElements}
    </div>
  </>
);

export default Services;
