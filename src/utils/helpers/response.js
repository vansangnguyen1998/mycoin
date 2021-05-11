const isSuccess = (res) => {
  const { status } = res
  switch (status) {
    case 200:
    case 201:
      return true

    default:
      return false
  }
}

export default { isSuccess }
