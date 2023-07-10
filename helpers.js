export const setErrorMessage = (message) => {
  document.getElementById('errorMessage').innerText = message
}
// export {setErrorMessage}

export const setEventByid = (id, event,  callBack) => {
document.getElementById(id).addEventListener(event,callBack)
}

const weatherCard = document.querySelector('.card');
const buttonToStart = document.getElementById('letsStart');
const cityElement = document.getElementById('city');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const answersList = document.querySelector('.answers');

export {
  weatherCard,
  buttonToStart,
  cityElement,
  searchInput,
  searchButton,
  answersList
}