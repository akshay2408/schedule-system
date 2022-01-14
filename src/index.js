import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/ConfigStore';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider  store={configureStore()}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
