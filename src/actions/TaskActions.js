// TaskActions.js

export const createTask = (task) => {
  return {
    type: 'CREATE_TASK',
    task: task
  }
};

export const completeTask = (task) => {
  return {
    type: 'COMPLETE_TASK',
    task: task
  }
};
