
const apiKey = "a62630f658c6e7eac2183f0d10ddc2ca";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchButton= document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather_icon");

async function checkWeather(cityName){
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    
    if(response.status == 404 || response.status == 400){
        alert("Invalid City name!!");
        location.reload();
    }else{
        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png";
    }
    else if(data.weather[0].main == "Haze" || data.weather[0].main == "Fog"){
        weatherIcon.src = "./images/haze.png";
    }
    else if(data.weather[0].main == "Thunderstorm" || data.weather[0].main == "Tornado"){
        weatherIcon.src = "./images/thunderstorm.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./images/snow.png";
    }

    document.querySelector(".weather").computedStyleMap.display = "block";
    }
    
}

    searchButton.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
        console.log(searchBox.value);
    });
    
    checkWeather("Bhopal");



