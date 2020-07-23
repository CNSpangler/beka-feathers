import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Pubs from '../Pubs/Pubs';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/publications" component={Pubs} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}
