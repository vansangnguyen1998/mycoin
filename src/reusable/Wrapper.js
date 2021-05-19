/**
 * File: \src\reusable\Wrapper.js
 * Project: mycoin
 * Created Date: Wednesday, April 21st 2021, 3:34:33 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

 import * as React from 'react'

 const { forwardRef } = React

 const Wrapper = forwardRef(({ className, children, ...rest }, ref) => {
   return (
     <div className={className} ref={ref} {...rest}>
       {children}
     </div>
   )
 })

 export default Wrapper
