var searchButton = document.querySelector('#search-button'); 
const APIKey = '6a52459f2c446b85f53fd4ca81881f54';
const futureWeather = "api.openweathermap.org/data/2.5/forecast?q=cityname&appid";
const currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=CITYNAME&appid="
let currentDate = dayjs().format('MMM-D-YYYY');
let cityEl = document.getElementById('currentCityName');
let tempEl = document.getElementById('temp');
let highTempEl = document.getElementById('high');
let lowTempEl = document.getElementById('low');
let windEl = document.getElementById('wind'); 
let weatherEl = document.getElementById('currentWeather');
let iconEl = document.getElementById('icon');
let humEl = document.getElementById('humidity');
let currentDateEL = document.getElementById('currentDate');

searchButton.onclick = function(event) {
    event.preventDefault();
    console.log('You clicked me');
    userInput();
};

function userInput(event) {
    let city = searchBar.value;
    console.log(city);
    if (userInput == null) {
        return;
    } else {
        currentCityWeather(city);
        futureCityWeather(city);
    }
};

function currentCityWeather(city) {
    fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey  + "&units=imperial").then(function(response){
       return response.json();
    }).then(function(data) {
        console.log(data);

        let city = data.name;
        let currTemp = data.main.temp;
        let HT = data.main.temp_max;
        let LT = data.main.temp_min;
        let hum = data.main.humidity;
        let wind = data.wind.speed;
        let date = currentDate;

        cityEl.textContent = city;
        currentDateEL.textContent = date;
        currTemp.textContent = "Currently" + currTemp + "°F";
        highTempEl.textContent = "The high for today is:" + HT + "°F";
        lowTempEl.textContent = "The low for tonight is:" + LT + "°F";
        humEl.textContent = "Current humidity level:" + hum;
        windEl.textContent = "The wind speed is:" + wind + "mph";
        // iconEl.textContent = icon;
    }); 
}

function futureCityWeather(city) {
    fetch ("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial").then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
    });
};