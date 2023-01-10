var searchButton = document.querySelector('#search-button'); 
var APIKey = '6a52459f2c446b85f53fd4ca81881f54';
var city;
var queryURL = "api.openweathermap.org/data/2.5/forecast?q=cityname&appid" + APIKey;

searchButton.onclick = function() {
    console.log('You clicked me');
};




searchButton.addEventListener('click', console.log(searchButton, "clicked"));

// get user input

// fetch data

// display data (innerHTML????)

// display under the search bar the previous cities searched

