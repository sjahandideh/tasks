import { combineReducers } from 'redux';
import tasks from './TaskReducers';

export default combineReducers({
  tasks: tasks
});
