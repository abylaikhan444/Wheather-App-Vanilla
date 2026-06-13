const API_KEY = '97d07d0c9e56073e5439a0dd41d1b81e';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

//& 1. Найти все нужные элементы через querrySelector!

const inputCity = document.querySelector('#cityInput');
const searchButton = document.querySelector('#searchBtn');
const loader = document.querySelector('#loader');
const error = document.querySelector('#error');
const result = document.querySelector('#result');
const cityName = document.querySelector('#cityName');
const temperature = document.querySelector('#temp');
const description = document.querySelector('#description');
const humidity = document.querySelector('#humidity');


//& 2. async функция getWeather(city) которая:
//^    - делает запрос: `${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
//^    - использует fetch() + await
//^    - возвращает данные

const cityName = inputCity.textContent;

async function getWeather(city) {
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=ru`);

    if (!response.ok) {
        throw new Error('Город не найден!');
    }


}


console.log(cityName);


