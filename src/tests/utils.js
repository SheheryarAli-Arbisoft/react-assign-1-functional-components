import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

export const connectProviders = (Component, props = {}) => (
  <Router>
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  </Router>
);
