// routes
import React, { Component } from 'react';
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import 'bootstrap/dist/css/bootstrap.min.css';

// ----------------------------------------------------------------------

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#0b0c10' }}>
        <ThemeConfig>
          <ScrollToTop />
          <GlobalStyles />
          <BaseOptionChartStyle />
          <Router />
        </ThemeConfig>
      </div>
    );
  }
}
export default App;
