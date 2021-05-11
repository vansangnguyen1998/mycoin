/**
 * File: \src\redux\services\author.js
 * Project: TKDG
 * Created Date: Wednesday, April 21st 2021, 2:17:12 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

import api from 'src/services/api';
import usersData from "../../views/users/UsersData";
const getListAuthor = async()=> {

  let a = await api.get('/authors')
  return a.data.docs
}

export {getListAuthor}
