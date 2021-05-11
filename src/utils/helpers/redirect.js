const toWithPush = ({ history, path }) => {
  history.push(path)
}

const toWithReplace = (history, path) => {
  history.replace(path)
}

export default { toWithPush, toWithReplace }
