import React from 'react';
import Layout from 'containers/Layout/Layout.js'
import BurgerBuilder from 'containers/BurgerBuilder/BurgerBuilder'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'index.css';
import "./fontello/css/fontello.css";

import theme from 'utilis/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>

      <GlobalStyles />
      <Layout>
        <BurgerBuilder />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
