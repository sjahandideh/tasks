import { createStore } from 'redux';
import rootReducer from '../reducers/root';

export default function configureStore(intialState) {
  return createStore(rootReducer, initialState);
};
