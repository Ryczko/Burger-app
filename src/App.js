import React from 'react';
import Layout from 'containers/Layout/Layout.js'
import BurgerBuilder from 'containers/BurgerBuilder/BurgerBuilder'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'index.css';
import "./fontello/css/fontello.css";
import Checkout from 'containers/Checkout/Checkout'
import theme from 'utilis/theme'
import { BrowserRouter, Route } from 'react-router-dom'
import Orders from 'containers/Orders/Orders'

function App() {
  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/Burger-app'>
        <GlobalStyles />
        <Layout>

          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />

        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
