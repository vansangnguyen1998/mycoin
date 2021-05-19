/**
 * File: \src\reusable\Img.js
 * Project: mycoin
 * Created Date: Wednesday, April 21st 2021, 3:35:43 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */
 import * as React from 'react'
 import { LazyLoadImage } from 'react-lazy-load-image-component'

 const Img = ({ className, src, alt, ...rest }) => {
   return (
     <LazyLoadImage
       className={className}
       effect='opacity'
       alt={alt}
       src={src}
       {...rest}
       style={{ marginBottom: '-4px', 'z-index' : '1' }}
     />
   )
 }

 export default Img
