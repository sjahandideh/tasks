// TaskActions.js

export const createTask = (task) => {
  return {
    type: 'CREATE_TASK',
    task: task
  }
};
