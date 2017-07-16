// TaskReducers.js

export default (state = [], action) => {

  switch (action.type) {
    case 'CREATE_TASK':
      return [
        ...state,
        Object.assign({}, action.task)
      ];
    case 'COMPLETE_TASK':
      // get action.task and make it completed and return the whole state
      return state;
    default:
      return state;
  }

};
