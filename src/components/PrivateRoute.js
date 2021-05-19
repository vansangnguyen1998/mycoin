/**
 * File: \src\components\privateRoute.js
 * Project: mycoin
 * Created Date: Thursday, May 13th 2021, 8:33:38 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

 import * as React from 'react'
 import { Route, Redirect } from 'react-router-dom'
 import { useSelector } from 'react-redux'

 const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
   return (
     <Route
       {...rest}
       render={(props) =>
         isAuthenticated ? (
           <Component {...props} />
         ) : (
           <Redirect
             to={{ pathname: '/login', state: { from: props.location } }}
           />
         )
       }
     />
   )
 }

 export default PrivateRoute
