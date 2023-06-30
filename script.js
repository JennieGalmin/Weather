
    let apiKey = "683d671fcfaafa7deccc3245340db9d6";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
    

    

    const searchCity = document.querySelector(".searchinput input");
    const searchButton = document.querySelector(".searchinput button");

    let localDate = document.getElementById("timeZone");
    let timezone = 7200;
    let city = "Stockholm";

    
    function getFormattedDate(offsetInSeconds) {
        let currentDate = new Date();

        const formatter = new Intl.DateTimeFormat("sv", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "UTC",
        });

        let timezoneSeconds = currentDate.getUTCSeconds() + offsetInSeconds;
        currentDate.setUTCSeconds(timezoneSeconds);

        return formatter.format(currentDate);

    }

    setInterval(() =>   {
        
        let timeOffsetSec = timezone;
        localDate.innerText = getFormattedDate(timeOffsetSec);
    }, 1000);

    

     async function WeatherUpdate(cityName){

        const response = await fetch(apiUrl +  `q=${cityName}&appid=${apiKey}`);
        const data = await response.json();

        const weatherPics = document.querySelector(".weatherIcons");

        const timeOffsetInSeconds = data.timezone;
        localDate.innerHTML = getFormattedDate(timeOffsetInSeconds);

        timezone = data.timezone;

        document.querySelector(".cityName").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
        document.querySelector(".feelsLike").innerHTML = " Feels like " + data.main.feels_like + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+" %";
        document.querySelector(".wind").innerHTML = data.wind.speed +" m/s";
        document.querySelector(".airPressure").innerHTML = data.main.pressure + " hPa";

        console.log(data);


        if (data.weather[0].main == "Clear" ){
            weatherPics.src = "weatherIcons/clear.png"; 
            
        } else if (data.weather[0].main == "Clouds"){
            weatherPics.src = "weatherIcons/clouds.png"; 
            
        } else if (data.weather[0].main == "Rain"){
            weatherPics.src = "weatherIcons/Rain.png"; 
            

        } else if (data.weather[0].main == "Drizzle"){
                weatherPics.src = "weatherIcons/drizzle.png"; 
                
        } else if (data.weather[0].main == "Snow"){
            weatherPics.src = "weatherIcons/snow.png"; 
            
        } else if (data.weather[0].main == "Mist"){
            weatherPics.src = "weatherIcons/mist.png"; 
            
        }


    } 



setInterval(() =>   {
    
    let cityInput = city;
    WeatherUpdate(cityInput);
    
}, 1800000);



    searchButton.addEventListener("click", ()=> {
        WeatherUpdate(searchCity.value);
        city = searchCity.value;
    });

    WeatherUpdate(city);
    

        
  





