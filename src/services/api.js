/**
 * File: \src\api\index.js
 * Project: TKDG
 * Created Date: Wednesday, April 21st 2021, 1:19:26 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

 import axios from 'axios'

 const host = `http://localhost:3002`
 const apiHost = `${host}`

 const instance = axios.create({
   baseURL: apiHost,
   headers: {
     'Content-Type': 'application/json',
   },
 })

 export default instance
