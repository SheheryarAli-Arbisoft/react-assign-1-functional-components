import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from '../store';
import { theme } from '../theme';

export const connectProviders = Component => (
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    </Provider>
  </Router>
);
