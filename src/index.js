import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import burgerBuilderReducer from './store/reducers/burderBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducer = {
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer
}

const store = createStore(combineReducers(rootReducer), composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>

    <App />

  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
