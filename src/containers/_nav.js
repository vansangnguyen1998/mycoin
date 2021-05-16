import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Đào token',
    to: '/mine',
    icon: 'cil-calculator'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'lịch sử giao dịch',
    to: '/transaction_history',
    icon: 'cil-calculator'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Giao dịch',
    to: '/transaction',
    icon: 'cil-calculator'
  },
]

export default _nav
