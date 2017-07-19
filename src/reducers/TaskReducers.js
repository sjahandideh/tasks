// TaskReducers.js

// state == array of tasks
export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      return [
        ...state,
        Object.assign({}, action.task)
      ];
    case 'COMPLETE_TASK':
      let tasks = [...state];
      tasks.forEach(task => {
        if (task.text == action.task) {
          task.tags.pop('in-progress')
          task.tags.push('completed')
        }
      });
      return tasks;
    default:
      return state;
  }
};
