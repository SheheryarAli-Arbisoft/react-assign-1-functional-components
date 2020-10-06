import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Navbar from './views/Navbar';
import SearchForm from './views/SearchForm';
import VideosList from './views/VideosList';
import VideoPlayer from './views/VideoPlayer';

import Container from './components/Container';
import Heading from './components/Heading';

import store from './store';
import theme from './theme';

import './App.css';

const App = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Container>
            <Heading>
              <i className='fab fa-youtube' />
              Youtube Video Player
            </Heading>
            <SearchForm />
            <Switch>
              <Route exact path='/' component={VideosList} />
              <Route exact path='/:id' component={VideoPlayer} />
            </Switch>
          </Container>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
