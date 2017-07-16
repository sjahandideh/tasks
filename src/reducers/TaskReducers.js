// TaskReducers.js

export default (state = [], action) => {

  switch (action.type) {
    case 'CREATE_TASK':
      return [
        ...state,
        Object.assign({}, action.task)
      ];
    default:
      return state;
  }

};
