import React, { useEffect } from 'react';
import Layout from 'containers/Layout/Layout.js';
import BurgerBuilder from 'containers/BurgerBuilder/BurgerBuilder';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'index.css';
import "./fontello/css/fontello.css";
import Checkout from 'containers/Checkout/Checkout';
import theme from 'utilis/theme';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Orders from 'containers/Orders/Orders';
import Auth from 'containers/Auth/Auth';
import Logout from 'containers/Auth/Logout';
import { connect } from 'react-redux';
import * as autoLoginAction from 'store/actions'

function App(props) {

  useEffect(() => {
    props.autoLogin();
  }, [])

  let routes = (
    <Switch>
      <Route path="/" exact component={BurgerBuilder} />
      <Route path="/auth" component={Auth} />
      <Redirect to="/" />

    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/auth" component={Auth} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    )
  }


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/Burger-app'>
        <GlobalStyles />
        <Layout>
          {routes}
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLoginAction.checkLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
