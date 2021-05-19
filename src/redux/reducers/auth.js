/**
 * File: \src\redux\reducers\auth.js
 * Project: mycoin
 * Created Date: Tuesday, May 11th 2021, 10:01:05 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */


 import Author from "../actionTypes/author";

 const initialState = {
  isAuthenticated: !!sessionStorage.getItem('privateKey'),
  loading        : false
 };

 const auth = (state = initialState, action) => {
   switch (action.type) {
     case Author.FAIL_REQUEST_AUTH:
       return { ...state, loadingR: false };
     case Author.REQUEST_GET_LIST_AUTH:
       return { ...state, loadingR: true };
     case Author.GET_LIST_AUTH:
       return {
         ...state,
         isInitialized: true,
         loadingR: false,
         key: action.payload.auth,
       };
     case Author.CREATE_AUTH:
       return {
         ...state,
         loadingR: false,
         key: action.payload.auth
       };
     default:
       return state;
   }
 };
 export default auth;
