import { apiWeatherKey } from "./config.js";
import { kelvinToCelcius } from "./Helper.js";

async function successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiWeatherKey}`);
    const data = await response.json();
    // return data;

    const temperature = kelvinToCelcius(data.main.temp).toFixed(2);
    const city = data.name;
    const description = data.weather[0].description;

    const iconID = data.weather[0].icon;
    const urlIcon = `http://openweathermap.org/img/wn/${iconID}@2x.png`;

    console.log(temperature, city, description, iconID, data);

    const tempElement = document.querySelector("[data-temperature]");
    tempElement.innerHTML = temperature;

    const desElement = document.querySelector("[data-description]");
    desElement.innerHTML = description;

    switch (description) {
        case "thunderstorm with light rain":
        case "thunderstorm with rain":
        case "light thunderstorm":
        case "thunderstorm with heavy rain":
        case "thunderstorm":
        case "heavy thunderstorm":
        case "ragged thunderstorm":
        case "thunderstorm with light drizzle":
        case "thunderstorm with drizzle":
        case "thunderstorm with heavy drizzle":
            document.getElementById("icon").src = "assets/img/wheater/Night Windy Angled Rain Drops With Lightning.svg";
            break;

        case "light intensity drizzle":
        case "drizzle":
        case "heavy intensity drizzle":
        case "light intensity drizzle rain":
        case "drizzle rain":
        case "heavy intensity drizzle rain":
        case "shower rain and drizzle":
        case "heavy shower rain and drizzle":
        case "shower drizzle":
        case "light intensity shower rain":
        case "shower rain":
        case "heavy intensity shower rain":
        case "ragged shower rain":
            document.getElementById("icon").src = "assets/img/wheater/Night Rain Drops.svg";
            break;

        case "moderate rain":
        case "heavy intensity rain":
        case "very heavy rain":
        case "extreme rain":
        case "light rain":
            document.getElementById("icon").src = "assets/img/wheater/Day Rain Drops.svg";
            break;

        case "freezing rain":
        case "light snow":
        case "Snow":
        case "Heavy snow":
        case "Sleet":
        case "Light shower sleet":
        case "Shower sleet":
        case "Light rain and snow":
        case "Rain and snow":
        case "Light shower snow":
        case "Shower snow":
        case "Heavy shower snow":
            document.getElementById("icon").src = "assets/img/wheater/Snow.svg";
            break;

        case "mist":
        case "Smoke":
        case "Haze":
        case "sand/ dust whirls":
        case "fog":
        case "sand":
        case "dust":
        case "volcanic ash":
        case "squalls":
        case "tornado":
            document.getElementById("icon").src = "assets/img/wheater/Wind.svg";
            break;

        case "clear sky":
            document.getElementById("icon").src = "assets/img/wheater/Cloudy Sunny Clouds.svg";
            break;

        default:
            document.getElementById("icon").src = "assets/img/wheater/Cloudy Shiny Clouds.svg";
            break;
    }

    const cityElement = document.querySelector("[data-city]");
    cityElement.innerHTML = city;
}

function failedFunction() {
    return;
}

export function fetchData() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successFunction, failedFunction);
    } else {
        alert("It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.");
    }
}
