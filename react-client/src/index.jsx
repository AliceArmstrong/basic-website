import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) { // Is this needed?
  module.hot.accept('./components/App.jsx', () => {
    const App2 = require('./components/App.jsx').default; // eslint-disable-line global-require
    renderApp(App2);
  });
}
