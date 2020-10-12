import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Navbar } from './views/Navbar';
import { SearchForm } from './views/SearchForm';
import { VideoList } from './views/VideoList';
import { VideoPlayer } from './views/VideoPlayer';
import { Container } from './components/Container';
import { Text } from './components/Text';
import { store } from './store';
import { theme } from './theme';

import './App.css';

const App = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Container>
            <Text variant='heading'>
              <i className='fab fa-youtube' />
              Youtube Video Player
            </Text>
            <SearchForm />
            <Switch>
              <Route exact path='/' component={VideoList} />
              <Route exact path='/:id' component={VideoPlayer} />
            </Switch>
          </Container>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
