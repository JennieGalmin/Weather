
let apiKey = "f10dad3bfac46459aa27604881d6a566";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=paris";

async function getWeather(){
    try {
        console.log(apiUrl);
    const response = await fetch(apiUrl + "&appid=" + apiKey);
    if(!response.ok){
    console.log("error")
    } else {
    let data = await response.json();
    console.log(data);
    } }catch (error){
        console.error("error", error.message )
    }

 }

getWeather();