document.addEventListener("DOMContentLoaded", function () {

    let apiKey = "683d671fcfaafa7deccc3245340db9d6";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
    //"https://api.openweathermap.org/data/2.5/weather?units=metric&";
    
    const searchCity = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");
   
    const localDate = document.querySelector(".date p");
    //const localTime = document.querySelector(".time p");

    function getLocalDate(){

    let currentDate = new Date();
    let time = currentDate.getTimezoneOffset()* 60 ; 
    let cityTimezone = data.timezone;
    let localDateTimeStamp = currentDate.toLocaleString("en-US", { timeZone: cityTimezone});
    let localDateTime = new Date(localDateTimeStamp * 1000);
    let options = {
        weeday: "long", month: "long", day:"numeric",
    };
    console.log(time);


    let formattedDate = localDateTime.toLocaleDateString(undefined,options);
    localDate.innerHTML = formattedDate;
}
    getLocalDate();

     async function WeatherUpdate(cityName){
        
        const response = await fetch(apiUrl +  `q=${cityName}&appid=${apiKey}`);
        const data = await response.json();

        const weatherPics = document.querySelector(".weatherIcons");
        const weatherText = document.querySelector(".weather p");

      
        document.querySelector(".cityName").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
        document.querySelector(".feelsLike").innerHTML = " Feels like " + data.main.feels_like + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+" %";
        document.querySelector(".wind").innerHTML = data.wind.speed +" m/s";
        document.querySelector(".airPressure").innerHTML = data.main.pressure + " hPa";
       
        console.log(data);
        
    
        if (data.weather[0].main == "Clear" ){
            weatherPics.src = "weatherIcons/clear.png"; 
            weatherText.innerHTML = "Sol";
        } else if (data.weather[0].main == "Clouds"){
            weatherPics.src = "weatherIcons/clouds.png"; 
            weatherText.innerHTML = "Moln";
        } else if (data.weather[0].main == "Rain"){
            weatherPics.src = "weatherIcons/Rain.png"; 
            weatherText.innerHTML = "Regn";
    
        } else if (data.weather[0].main == "Drizzle"){
                weatherPics.src = "weatherIcons/drizzle.png"; 
                weatherText.innerHTML = "Dugg";
        } else if (data.weather[0].main == "Snow"){
            weatherPics.src = "weatherIcons/snow.png"; 
            weatherText.innerHTML = "Snö";
        } else if (data.weather[0].main == "Mist"){
            weatherPics.src = "weatherIcons/mist.png"; 
            weatherText.innerHTML = "Dimma";
        }


    } 
    
    searchButton.addEventListener("click", ()=> {
        WeatherUpdate(searchCity.value);
    });

    WeatherUpdate("paris");
    });
    



/*document.addEventListener("DOMContentLoaded", function(){

let apiKey = "683d671fcfaafa7deccc3245340db9d6";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather";


const searchCity = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function WeatherUpdate(cityName){
    const response = await fetch(apiUrl +  `q=${cityName}&appid=${apiKey}`);
    const data = await response.json();

    const weatherPics = document.querySelector(".weatherIcons");
    const weatherText = document.querySelector(".weather p");

    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
    document.querySelector(".feelsLike").innerHTML = " Feels like " + data.main.feels_like + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+" %";
    document.querySelector(".wind").innerHTML = data.wind.speed +" m/s";
    document.querySelector(".airPressure").innerHTML = data.main.pressure + " hPa"
    
    console.log(data);
    
    console.log(dayjs());


    if (data.weather[0].main == "Clear" ){
        weatherPics.src = "weatherIcons/clear.png"; 
        weatherText.innerHTML = "Sol";
    } else if (data.weather[0].main == "Clouds"){
        weatherPics.src = "weatherIcons/clouds.png"; 
        weatherText.innerHTML = "Moln";
    } else if (data.weather[0].main == "Rain"){
        weatherPics.src = "weatherIcons/rain.png"; 
        weatherText.innerHTML = "Regn";

    } else if (data.weather[0].main == "Drizzle"){
            weatherPics.src = "weatherIcons/drizzle.png"; 
            weatherText.innerHTML = "Dugg";
    } else if (data.weather[0].main == "Snow"){
        weatherPics.src = "weatherIcons/snow.png"; 
        weatherText.innerHTML = "Snö";
    } else if (data.weather[0].main == "Mist"){
        weatherPics.src = "weatherIcons/mist.png"; 
        weatherText.innerHTML = "Dimma";
    }


searchButton.addEventListener("click", ()=> {
    WeatherUpdate(searchCity.value);
});
   
WeatherUpdate("paris");
}

setInterval(WeatherUpdate,1000);

  
 });

*/
















