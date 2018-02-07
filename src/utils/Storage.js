const getFromLocalStorage = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key))
  } else {
    return []
  }
}

const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export { getFromLocalStorage, setToLocalStorage }
