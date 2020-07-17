import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import Pubs from '../Pubs';
import Services from '../Services';
import Contact from '../Contact';
import Footer from '../Footer';

export default function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Route path='/' component={Home} />
        <Route path='/publications' component={Pubs} />
        <Route path='/services' component={Services} />
        <Route path='contact' component={Contact} />
      </Router>
      <Footer></Footer>
    </>
  );
}
