import { API_URL,API_KEY,API_VERSION } from "./constants.js";
import {  weatherCard,buttonToStart,cityElement,searchInput,searchButton,answersList} from "./helpers.js"

const cities = ['Yerevan', 'London', 'Paris', 'Tokyo', 'Sydney'];
let currentIndex = 0;

buttonToStart.addEventListener('click', function() {
  weatherCard.classList.add('active');
  buttonToStart.parentElement.classList.add('active');
  currentIndex = 0;
  displayNextCity();
});

searchButton.addEventListener('click', function() {
  const inputValue = searchInput.value.trim();
  const currentCity = cities[currentIndex - 1];
  getTemperature(currentCity, inputValue);
  displayNextCity();
});

function displayNextCity() {
  if (currentIndex < cities.length) {
    const nextCity = cities[currentIndex];
    currentIndex++;
    cityElement.textContent = nextCity;
    searchInput.value = '';
    searchInput.focus();
  } else {
    cityElement.textContent = 'Game Over';
    searchButton.disabled = true;
  }
}

function getTemperature(city, inputValue) {
  fetch(`${API_URL}/${API_VERSION}/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then((resp) => resp.json())

    .then((data) => {
      const temperature = data.main.temp;
      if (inputValue === temperature.toString()) {
        appendAnswer(inputValue, temperature, 'green');
      } else {
        appendAnswer(inputValue, temperature, 'red');
      }
    })
    .catch((error) => {
      console.log('Error fetching weather data:', error);
    });
}

function appendAnswer(userAnswer, actualTemperature, color) {
  const answerItem = document.createElement('li');
  const temperatureDiff = Math.abs(userAnswer - actualTemperature);

  if (temperatureDiff <= 3) {
    color = 'green';
  } else {
    color = 'red';
  }

  answerItem.style.color = color;
  answerItem.innerHTML = `${userAnswer}&deg;C<br>was ${actualTemperature}&deg;C`;
  answersList.appendChild(answerItem);
}



