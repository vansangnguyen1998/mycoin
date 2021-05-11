import Regex from './regex'

const ONE_SECOND = 1000
const ONE_MINUTE = 60 * ONE_SECOND
const ONE_HOUR = 60 * ONE_MINUTE
const ONE_DAY = 24 * ONE_HOUR
const ONE_WEEK = 7 * ONE_DAY
const PASSWORD_DEFAULT = 'P@ssw0rd'

const Notification = {
  REMIND              : 'REMIND',
  ASSIGNMENT_CANCELLED: 'ASSIGNMENT_CANCELLED',
  ASSIGNMENT_DONE     : 'ASSIGNMENT_DONE',
  ASSIGNMENT_INPROCESS: 'ASSIGNMENT_INPROCESS',
  ASSIGNMENT_TODO     : 'ASSIGNMENT_TODO'
}

const Action = {
  CREATE: 'create',
  DELETE: 'delete',
  UPDATE: 'update',
  READ  : 'read',
  REMOVE: 'Remove',
  CANCEL: 'Cancel',
  BACK  : 'back',
  NEXT  : 'next',
  FINISH: 'finish'
}

const Toggle = {
  DEFAULT: 'toggle',
  HIDE   : 'hide',
  SHOW   : 'show'
}

const Toast = {
  ERROR  : 'error',
  WARNING: 'warning',
  SUCCESS: 'success'
}

const ModeSubAssignment = {
  PRIVATE : 'private',
  INTERNAL: 'internal',
  PUBLIC  : 'public'
}

const Urgency = {
  LOW   : 'low',
  MEDIUM: 'medium',
  HIGH  : 'high'
}

const Status = {
  ACTIVE  : 'active',
  INACTIVE: 'inactive'
}

export {
  Regex,
  Notification,
  Action,
  Toggle,
  Toast,
  Urgency,
  Status,
  ModeSubAssignment,
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR,
  ONE_DAY,
  ONE_WEEK,
  PASSWORD_DEFAULT
}
