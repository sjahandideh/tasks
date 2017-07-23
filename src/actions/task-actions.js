/** Action Creators **/

import TaskApi from '../api/task-api';
import * as types from './action-types';

/** Sync Action Creators **/

export const createTask = task => {
  return {
    type: types.CREATE_TASK,
    task: task
  };
};

export const completeTask = task => {
  return {
    type: types.COMPLETE_TASK,
    task: task
  };
};

/** Async Action Creators
 *
 * Pattern:
 *    doAsync: makes an async request and waits for the response (Api call) - no type since it is dispatched by store itself
 *    doSuccess: dispatches success action with payload received from server (back to UI components) - type == DO_SUCESS
 *    doFailure: dispatches failure action with error message (back to UI components) - type == DO_FAILURE
 */

export const loadTasksAsync = () => {
  return function(dispatch) {
    return TaskApi.getAll()
      .then((tasks) => {
        dispatch(loadTasksSuccess(tasks));
      })
      .catch((error) => {
        dispatch(loadTasksFailure(error));
      })
  };
};

export const loadTasksSuccess = (tasks) => {
  return {
    type: types.LOAD_TASKS_SUCCESS,
    tasks: tasks
  };
}

export const loadTasksFailure = (error) => {
  return {
    type: types.LOAD_TASKS_FAILURE,
    error: error
  };
}
