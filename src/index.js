import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

// style
import './assets/styles/index.css';
// component
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import AppRoute from './routes/route-maker';
import routes from './routes/routes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        {routes.map((route, i) => (
          <AppRoute key={i} {...route}/>
        ))}
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
