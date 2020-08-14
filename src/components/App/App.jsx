import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../global';
import { theme } from '../../theme';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Pubs from '../Pubs/Pubs';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const history = createBrowserHistory();

export default function App() {
  const RoutesWithFooter = () => {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/publications" component={Pubs} />
          <Route exact path="/services" component={Services} />
        </Switch>
        <Footer />
      </>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route component={RoutesWithFooter} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
