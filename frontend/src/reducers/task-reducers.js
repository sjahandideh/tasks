import * as types from '../actions/action-types';
import initialState from './initial-state';

// state == array of tasks
export default (state = initialState.tasks, action) => {
  switch (action.type) {
    case types.CREATE_TASK:
      return [
        ...state,
        Object.assign({}, action.task)
      ];
    case types.COMPLETE_TASK:
      let tasks = [...state];
      tasks.forEach(task => {
        if (task.text == action.task) {
          task.tags.pop('in-progress')
          task.tags.push('completed')
        }
      });
      return tasks;
    case types.LOAD_TASKS_SUCCESS:
      return action.tasks;
    case types.LOAD_TASKS_FAILURE:
      console.log('Action Error: ', action.error.message);
      return state;
    case types.UPDATE_TASKS_SUCCESS:
      return state;
    case types.UPDATE_TASKS_FAILURE:
      console.log('Action Error: ', action.error.message);
      return state;
    default:
      return state;
  }
};
