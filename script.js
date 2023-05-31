
let apiKey = "48e6df43f19ec26ac8d873e2cd75073b";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";







/*document.addEventListener("DOMContentLoaded", ()=> {
let inputCityName = document.querySelector(".search input");
let inputButton = document.querySelector(".search button");

}


async function checkWeather(cityName){
    let response = await fetch (apiUrl + cityName + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " m/s";
    document.querySelector(".airPressure").innerHTML = data.main.pressure + " hPa";
    document.querySelector(".feelsLike").innerHTML = "feels like " + data.main.feels_like  + "°";
}
   
    
let weatherIcon = document.querySelector(".cloudsPic p");

    if (data.weather[0].main == "clouds"){
        weatherIcon.src = "clouds.png";
    }else if (data.weather[0].main == "sun"){
        weatherIcon.src = "clear.png";
    }else if (data.weather[0].main == "drizzle"){
        weatherIcon.src= "drizzle.png";
    }

inputButton.addEventListener("click", ()=> {
    checkWeather(inputCityName.value);
    });



let day;
switch (new Date().getDay()){
    case 0 :
        day = "Söndag";
    break;
    case 1:
        day = "Måndag";
    break;
    case 2 :
        day = "Tisdag";
    break;
    case 3:
        day = "Onsdag";
    break;
    case 4 :
        day = "Torsdag";
    break;
    case 5 :
        day = "Fredag";
    break;
    case 6:
        day = "Lördag";
    break;

   
} 

document.querySelector(".weekDay p").innerHTML=day;



function updateTime (){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds

    let timeString = hours + ":"+ minutes + ":" + seconds;
    document.querySelector(".time p").innerHTML = timeString;
}
updateTime();

setInterval(updateTime, 1000);


function updateDate (){
    let currentDate = new Date ();
    let date = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();

    let dateString = date + ":" + month + ":"+year;
    document.querySelector(".date p").innerHTML = dateString;
}
updateDate();
setInterval(updateDate, 1000);

};




*/
