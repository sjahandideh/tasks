import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// style
import './assets/styles/index.css';
// component
import Home from './components/home';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
