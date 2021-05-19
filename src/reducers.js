/**
 * File: \src\reducers.js
 * Project: mycoin
 * Created Date: Saturday, April 24th 2021, 11:23:41 am
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

import { combineReducers } from "redux";

import { author, auth} from "src/redux/reducers";

const appReducer = combineReducers({
  author,
  auth
});

const rootReducer = (state, action) => {
  if (action.type === "AUTH_LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
