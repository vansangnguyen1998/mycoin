/**
 * File: \src\redux\actions\author.js
 * Project: TKDG
 * Created Date: Wednesday, April 21st 2021, 2:13:21 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

 import { Author } from '../actionTypes'

 export const failRequestAuthor = () => ({
   type: Author.FAIL_REQUEST_AUTHOR
 })

 export const requestGetListAuthor = () => ({
   type: Author.REQUEST_GET_LIST_AUTHOR
 })

 export const getListAuthor = ({ listAuthor }) => ({
   type   : Author.GET_LIST_AUTHOR,
   payload: {
     listAuthor
   }
 })

 export const createNewAuthor = ({ author }) => ({
  type   : Author.CREATE_AUTHOR,
  payload: {
    author
  }
})
