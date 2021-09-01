import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import firebase from "./fbase";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
