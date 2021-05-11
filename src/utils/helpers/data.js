import { Regex } from '../constrants/index'

const parseToJsonApiFromResponseWithLabel = ({ data, subFieldName }) =>
  Object.fromEntries(
    data?.docs?.map((elm) => [
      elm._id,
      {
        ...elm,
        id      : elm._id,
        value   : elm._id,
        label   : elm.name,
        subLabel: subFieldName ? elm[subFieldName]?.name : undefined
      }
    ])
  )

const parseToArrayFromResponseWithLabel = ({ data, subFieldName }) =>
  data?.docs?.map((elm) => ({
    ...elm,
    id      : elm._id,
    value   : elm._id,
    label   : elm.name,
    subLabel: subFieldName ? elm[subFieldName]?.name : undefined
  }))

const parseToJsonApiFromResponse = (data) =>
  Object.fromEntries(
    data?.docs?.map((elm) => [
      elm._id,
      {
        ...elm,
        id: elm._id
      }
    ])
  )

const validateEmail = (email) => Regex.email.test(email)

const validatePhoneNumber = (phoneNumber) => Regex.phoneNumber.test(phoneNumber)

export default {
  validateEmail,
  validatePhoneNumber,
  parseToJsonApiFromResponse,
  parseToJsonApiFromResponseWithLabel,
  parseToArrayFromResponseWithLabel
}
