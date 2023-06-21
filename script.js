document.addEventListener("DOMContentLoaded", function() {

let apiKey = "f10dad3bfac46459aa27604881d6a566";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=oslo";

async function getWeather(){
   
    
    const response = await fetch(apiUrl  + "&appid=" + apiKey);

    if(!response.ok){
    console.log("error")

    } else {

    let data = await response.json();
    console.log(data);

    document.querySelector(".cityName").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°c";
    document.querySelector(".weatherDescription").innerText = data.weather[0].description;
    document.querySelector(".feelsLike").innerText = "Feels Like: " + Math.round(data.main.feels_like) + "°c";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " m/s";
    document.querySelector(".airPressure").innerText = data.main.pressure + " hPa";


    
    } 
 }

getWeather();

});