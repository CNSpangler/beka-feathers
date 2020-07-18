import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../../Header/Header';
import Home from '../Home';
import Pubs from '../Pubs';
import Services from '../Services';
import Contact from '../Contact';
import Footer from '../Footer';

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
      <Footer id="footer"></Footer>
    </Router>
  );
}
