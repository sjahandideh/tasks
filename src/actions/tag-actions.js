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

export const createTagAsync = (tag) => {
  return function(dispatch) {
    return TagApi.create(tag)
      .then((tags) => {
        dispatch(createTagsSuccess(tags));
      })
      .catch((error) => {
        dispatch(createTagsFailure(error));
      })
  };
};

export const createTagsSuccess = (tags) => {
  return {
    type: types.CREATE_TAGS_SUCCESS,
    tags: tags
  };
}

export const createTagsFailure = (error) => {
  return {
    type: types.CREATE_TAGS_FAILURE,
    error: error
  };
}
