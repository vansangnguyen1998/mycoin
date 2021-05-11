/**
 * File: \src\redux\reducers\author.js
 * Project: TKDG
 * Created Date: Wednesday, April 21st 2021, 2:15:56 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

import Author from "../actionTypes/author";

const initialState = {
  isInitialized: false,
  loadingR: false,
  listAuthor: [],
};

const author = (state = initialState, action) => {
  switch (action.type) {
    case Author.FAIL_REQUEST_AUTHOR:
      return { ...state, loadingR: false };
    case Author.REQUEST_GET_LIST_AUTHOR:
      return { ...state, loadingR: true };
    case Author.GET_LIST_AUTHOR:
      return {
        ...state,
        isInitialized: true,
        loadingR: false,
        listAuthor: action.payload.listAuthor,
      };
    case Author.CREATE_AUTHOR:
      return {
        ...state,
        loadingR: false,
        listAuthor: [action.payload.author, ...state.listAuthor]
      };
    default:
      return state;
  }
};
export default author;
