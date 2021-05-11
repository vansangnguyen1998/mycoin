import { toast } from 'react-toastify'

import redirect from './redirect'
import response from './response'
import time from './time'
import file from './file'
import DataHelper from './data'

const getValueFromStorage = (name) => {
  return localStorage.getItem(name)
}

const removeValueFromStorage = (name) => {
  return localStorage.removeItem(name)
}

const setValueToStorage = ({ name, value }) => {
  return sessionStorage.setItem(name, value)
}

const commaSeparating = (value, number) => {
  return value
    ?.toString()
    .replace(new RegExp(`\\B(?=(\\d{${number}})+(?!\\d))`, 'g'), ',')
}

const getDayMonthYear = (time) => {
  return new Date(time)?.toLocaleDateString('en-GB')
}

const toastifyNotify = ({ type, msg }) => {
  toast[type](msg, {
    position       : 'top-right',
    autoClose      : 5000,
    hideProgressBar: false,
    closeOnClick   : true,
    pauseOnHover   : true,
    draggable      : true,
    progress       : undefined
  })
}

export {
  DataHelper,
  toastifyNotify,
  redirect,
  response,
  getValueFromStorage,
  setValueToStorage,
  removeValueFromStorage,
  time,
  file,
  getDayMonthYear,
  commaSeparating
}
