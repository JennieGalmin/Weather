
let apiKey = "48e6df43f19ec26ac8d873e2cd75073b";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Oslo";

async function checkWeather(cityName){
    let response = await fetch (apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = math.round(data.main.temp) + "°";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " m/s";
    document.querySelector(".airPressure").innerHTML = data.main.pressure + " hPa";
    document.querySelector(".feelsLike").innerHTML = "feels like " + data.main.feels_like  + "°";
   
} 
checkWeather()