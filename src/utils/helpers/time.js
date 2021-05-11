// import moment from 'moment'

// import i18n from 'services/i18n'
// import 'moment/locale/vi'

// const formatAgo = ({ time = new Date() }) => {
//   const timeMoment = moment(time)

//   // Check time more than 1 year
//   const diffYears = moment().diff(timeMoment, 'years')
//   if (diffYears > 0) {
//     return `${diffYears} ${
//       diffYears === 1 ? i18n.t('common.date.yearAgo') : 'years ago'
//     }`
//   }

//   // Check time more than 1 year
//   const diffMonths = moment().diff(timeMoment, 'months')
//   if (diffMonths > 0) {
//     return `${diffMonths} ${diffMonths === 1 ? 'month ago' : 'months ago'}`
//   }

//   // Check time smaller than 4 weeks or more than 1 week
//   const diffWeeks = moment().diff(timeMoment, 'weeks')
//   if (diffWeeks > 0 && diffWeeks < 5) {
//     return `${diffWeeks} ${diffWeeks === 1 ? 'week ago' : 'weeks ago'}`
//   }

//   return timeMoment.fromNow()
// }

// export default { formatAgo }
