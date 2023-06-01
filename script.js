document.addEventListener("DOMContentLoaded", function () {

let apiKey = "48e6df43f19ec26ac8d873e2cd75073b";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const searchCity = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function WeatherUpdate(cityName){
    

    const response = await fetch(apiUrl +  `q=${cityName}&appid=${apiKey}`);
    const data = await response.json();

    

    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
    document.querySelector(".feelsLike").innerHTML = " Feels like " + data.main.feels_like + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+" %";
    document.querySelector(".wind").innerHTML = data.wind.speed +" m/s";
    document.querySelector(".airPressure").innerHTML = data.main.pressure + " hPa";
   
    console.log(data);
} 

searchButton.addEventListener("click", ()=> {
    WeatherUpdate(searchCity.value);
});
WeatherUpdate("paris");
});








