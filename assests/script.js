const searchButton = document.querySelector('#search-button'); 
const APIKey = '6a52459f2c446b85f53fd4ca81881f54';
const futureWeather = "api.openweathermap.org/data/2.5/forecast?q=cityname&appid";
const currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=CITYNAME&appid="
const forecastContainer = document.getElementById('forecastContainer');
const currentDate = dayjs().format('MMM-D-YYYY');
const cityEl = document.getElementById('currentCityName');  
const tempEl = document.getElementById('temp');
const highTempEl = document.getElementById('high');
const lowTempEl = document.getElementById('low');
const windEl = document.getElementById('wind'); 
const iconEl = document.getElementById('skies');
const humEl = document.getElementById('humidity');
const currentDateEL = document.getElementById('currentDate');

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
    fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey  + "&units=imperial")
    .then(function(response){
       return response.json();
    }).then(function(data) {
        console.log(data);

        let city = data.name;
        let temp = data.main.temp;
        let HT = data.main.temp_max;
        let LT = data.main.temp_min;
        let hum = data.main.humidity;
        let wind = data.wind.speed;
        let date = currentDate;
        let iconCode = data.weather[0].icon;
        
        cityEl.textContent = city;
        currentDateEL.textContent = date;
        tempEl.textContent = "Currently " + Math.floor(temp) + "°F";
        highTempEl.textContent = "The high for today is: " + Math.floor(HT) + "°F";
        lowTempEl.textContent = "The low for tonight is: " + Math.floor(LT) + "°F";
        humEl.textContent = "Current humidity level: " + Math.floor(hum) + "%";
        windEl.textContent = "The current wind is: " + Math.floor(wind) + " mph";
        iconCode = "http://openweathermap.org/img/w/" + iconCode + ".png";
        iconEl.innerHTML = `<img src="${iconCode}">`;
        }); 
};

function futureCityWeather(city) {
    fetch ("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial") 
        .then(response => response.json())
        .then(data => {
            console.log(data);
          var forecast = data.list;
          forecastContainer.innerHTML = "";
          for(var i = 4; i < forecast.length; i += 8) {
            let currentIndex = forecast[i];
            let HT = currentIndex.main.temp_max;
            let LT = currentIndex.main.temp_min;
            let hum = currentIndex.main.humidity;
            let wind = currentIndex.wind.speed;
            let date = dayjs.unix(currentIndex.dt).format('MMM-D-YYYY');
            console.log(date);
            let iconCode = currentIndex.weather[0].icon;
            iconCode = "http://openweathermap.org/img/w/" + iconCode + ".png";
            let newDiv = document.createElement('div');
            newDiv.classList.add("col-2", "m-4");
            newDiv.innerHTML = `
            <div class="p-2">
              <div class="card" style="width: 15rem;">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted" id="futureDate">${date}</h6>
                  <h6 class="card-subtitle mb-2 text-muted" id="highTemp">The high for this day is ${Math.floor(HT)}°F</h6>
                  <h6 class="card-subtitle mb-2 text-muted" id="lowTemp">The low for today is ${Math.floor(LT)}°F</h6>
                  <h6 class="card-subtitle mb-2 text-muted" id="forcastWind">The wind for today is ${Math.floor(wind)} mph</h6>
                  <h6 class="card-subtitle mb-2 text-muted" id="forcastHumidity">The humidity will be ${Math.floor(hum)} %</h6>
                  <h6 class="card-subtitle mb-2 text-muted" id="forecastSkies"><img src="${iconCode}"></h6>
                </div>
              </div>
            </div>
            `
            forecastContainer.appendChild(newDiv);
          }
        });
}