const searchButton = document.querySelector('#search-button'); 
const APIKey = '6a52459f2c446b85f53fd4ca81881f54';
const futureWeather = "api.openweathermap.org/data/2.5/forecast?q=cityname&appid";
const currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=CITYNAME&appid="

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
    }); 
        
}

function futureCityWeather(city) {
    fetch ("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial").then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
    });
};



// display under the search bar the previous cities searched