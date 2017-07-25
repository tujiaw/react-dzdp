import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import appReducers from './reducers'
import './index.css'

let store = createStore(appReducers, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
     <App /> 
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
