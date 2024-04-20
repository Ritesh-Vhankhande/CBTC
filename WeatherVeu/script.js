
const apiKey = "4b5fb59e6fdfc1c6b1831b58c759839b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "WeatherVeu/images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "WeatherVeu/images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "WeatherVeu/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "WeatherVeu/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "WeatherVeu/images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "WeatherVeu/images/snow.png";
    }


    

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})





//q=mumbai&appid=4b5fb59e6fdfc1c6b1831b58c759839b
// document.querySelector(".cityName").innerHTML = data.name;