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

async function getWeather(city) {
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=ru`);

    if (!response.ok) {
        throw new Error('Город не найден!');
    }

    const responseResult = await response.json();
    return responseResult;
}



//& 3. функциz showResult(data) которая:
//^    - показывает блок #result
//^    - заполняет cityName — data.name
//^    - заполняет temp — data.main.temp + '°C'
//^    - заполняет description — data.weather[0].description
//^    - заполняет humidity — 'Влажность: ' + data.main.humidity + '%'

function showResult(data) {
    //! 1. убрать класс hidden у result
    result.classList.remove('hidden');
    //! 2. cityName.textContent = ?
    cityName.textContent = data.name;
    //! 3. temperature.textContent = ?
    temperature.textContent = data.main.temp + '°C';
    //! 4. description.textContent = ?
    description.textContent = data.weather[0].description;
    //! 5. humidity.textContent = ?
    humidity.textContent = 'Влажность: ' + data.main.humidity + '%';
}

//& 4. функция showError(message) которая:
//^    - показывает блок #error с текстом ошибки

function showError(message) {
    error.classList.remove('hidden');
    error.textContent = message;
}

//& 5. функция handleSearch() которая:
//^    - берёт значение из input
//^    - если пустое — ничего не делает
//^    - показывает лоадер, скрывает result и error
//^    - вызывает getWeather()
//^    - показывает результат или ошибку
//^    - скрывает лоадер

async function handleSearch() {
    const city = inputCity.value.trim();

    //! 1. если city пустой — выходим
    if (city === '') {
        return;
    }

    //! 2. показать loader, скрыть result и error
    //!    loader.classList.remove('hidden')
    //!    result.classList.add('hidden')
    //!    error.classList.add('hidden')
    loader.classList.remove('hidden');
    result.classList.add('hidden');
    error.classList.add('hidden');
    
    //! 3. try/catch:
    //!    try — вызвать getWeather(city), передать результат в showResult()
    //!    catch — передать err.message в showError()
    try {
        const getWeatherResult = await getWeather(city);
        showResult(getWeatherResult);
    } catch (err) {
        showError(err.message);
    } finally {
        loader.classList.add('hidden');
    }
    // 4. в finally — скрыть loader
}

//& 6. события:
//!    - клик на кнопку → handleSearch()
searchButton.addEventListener('click', () => {
    handleSearch();
})
//!    - Enter в input → handleSearch()
inputCity.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});
