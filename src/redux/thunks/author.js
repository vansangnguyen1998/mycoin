/**
 * File: \src\redux\thunks\author.js
 * Project: mycoin
 * Created Date: Wednesday, April 21st 2021, 2:17:18 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

import api from "src/services/api";
import {
  failRequestAuthor,
  getListAuthor,
  createNewAuthor,
  requestGetListAuthor,
} from "../actions/author";
import { response, DataHelper } from "src/utils/helpers";

const fetchListAuthor = () => async (dispatch) => {
  try {
    dispatch(requestGetListAuthor());

    const res = await api.get("/authors");

    if (response.isSuccess(res)) {
      dispatch(
        getListAuthor({
          listAuthor: DataHelper.parseToArrayFromResponseWithLabel({
            data: res.data,
          }),
        })
      );
    } else {
      dispatch(failRequestAuthor());
    }
  } catch (error) {
    console.log(error);
  }
};

const shouldFetchListAuthor = (state) => {
  const { isInitialized } = state
  return !isInitialized
};

export const fetchListAuthorIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchListAuthor(getState().author)) {
    return dispatch(fetchListAuthor());
  }
  return true;
};

export const createAuthor = ({ author }) => async (dispatch) => {
  dispatch(requestGetListAuthor());
  const res = await api.post("/authors", author);
  if (response.isSuccess(res)) {
    dispatch(createNewAuthor({ author: res.data }))
    return { status: true }
  } else {
    return { status: false }
  }
}

