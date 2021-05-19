/**
 * File: \src\components\Loading\index.js
 * Project: mycoin
 * Created Date: Wednesday, April 21st 2021, 3:34:00 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

 import * as React from 'react'
 import classnames from 'classnames'
 import { useSelector } from 'react-redux'

 import { Wrapper, Img } from 'src/reusable'

 import LoadingBlueIcon from 'src/assets/icons/loading--blue.svg'

 import './style.scss'

 const AppLoading = ({ content, modal }) => {
   const sidebarExpand = useSelector(
     (state) => state.specification?.sidebarExpand
   )

   return (
     <Wrapper
        Style="z-index: 1"
       className={classnames([
         'app-loading',
         { content: content },
         { modal: modal },
         { 'sidebar-expand': sidebarExpand }
       ])}
     >
       <Img className='app-loading__icon' src={LoadingBlueIcon} />
     </Wrapper>
   )
 }

 export default AppLoading
