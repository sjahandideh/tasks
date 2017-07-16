import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// style
import './assets/styles/index.css';
// component
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
