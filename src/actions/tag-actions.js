/** Action Creators **/

import TagApi from '../api/tag-api';
import * as types from './action-types';

/** Sync Action Creators **/


/** Async Action Creators
 *
 * Pattern:
 *    doAsync: makes an async request and waits for the response (Api call) - no type since it is dispatched by store itself
 *    doSuccess: dispatches success action with payload received from server (back to UI components) - type == DO_SUCESS
 *    doFailure: dispatches failure action with error message (back to UI components) - type == DO_FAILURE
 */

/** load tags **/

export const loadTagsAsync = () => {
  return function(dispatch) {
    return TagApi.getAll()
      .then((tags) => {
        dispatch(loadTagsSuccess(tags));
      })
      .catch((error) => {
        dispatch(loadTagsFailure(error));
      })
  };
};

export const loadTagsSuccess = (tags) => {
  return {
    type: types.LOAD_TAGS_SUCCESS,
    tags: tags
  };
}

export const loadTagsFailure = (error) => {
  return {
    type: types.LOAD_TAGS_FAILURE,
    error: error
  };
}

/** update tags **/

export const updateTagsAsync = (tags) => {
  return function(dispatch) {
    if (tags.length == 0) {
      return dispatch(updateTagsSuccess(tags));
    };

    return TagApi.updateAll(tags)
      .then((tags) => {
        dispatch(updateTagsSuccess(tags));
      })
      .catch((error) => {
        dispatch(updateTagsFailure(error));
      })
  };
};

export const updateTagsSuccess = (tags) => {
  return {
    type: types.UPDATE_TAGS_SUCCESS,
    tags: tags
  };
}

export const updateTagsFailure = (error) => {
  return {
    type: types.UPDATE_TAGS_FAILURE,
    error: error
  };
}
