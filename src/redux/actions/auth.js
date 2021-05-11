/**
 * File: \src\redux\actions\auth.js
 * Project: TKDG
 * Created Date: Tuesday, May 11th 2021, 10:00:44 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */


 import { Auth } from '../actionTypes'

 export const failRequestAuth = () => ({
   type: Auth.FAIL_REQUEST_AUTH
 })

 export const requestGetListAuth = () => ({
   type: Auth.REQUEST_GET_LIST_AUTH
 })

 export const getListAuth = ({ Auth }) => ({
   type   : Auth.GET_LIST_AUTH,
   payload: {
     Auth
   }
 })

 export const createNewAuthor = ({ author }) => ({
  type   : Auth.CREATE_AUTH,
  payload: {
    author
  }
})
