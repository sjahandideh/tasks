import * as types from '../actions/action-types';
import initialState from './initial-state';

// state == array of tags
export default (state = initialState.tags, action) => {
  switch (action.type) {
    case types.LOAD_TAGS_SUCCESS:
      return action.tags;
    case types.LOAD_TAGS_FAILURE:
      return action.error;
    case types.CREATE_TAGS_SUCCESS:
      return action.tags;
    case types.CREATE_TAGS_FAILURE:
      return action.error;
    default:
      return state;
  }
};
