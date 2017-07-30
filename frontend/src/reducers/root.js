import { combineReducers } from 'redux';
import tasks from './task-reducers';
import tags from './tag-reducers';

export default combineReducers({
  tags: tags,
  tasks: tasks
});
