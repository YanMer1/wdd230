const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#condition");
const windDesc = document.querySelector("#windSpeed");

const url = `http://api.openweathermap.org/geo/1.0/direct?q=Reboleira&limit=5&appid=11a2e58d6328f2a786e3358f2c695671`;

apiFetch(url);

function displayResults (weatherData) {
    currentTemp.innerHTML = Math.round((weatherData.main.temp.toFixed(0) - 32) * (5/9));
    const weatherimagesrc = `https://yanmer1.github.io/wdd230/chamber/images/weatherIcons/${weatherData.weather[0].icon}.png`;

    // Capitalize first letter of each word.
    const descweather = weatherData.weather[0].description;
    const descweatherdisplay = descweather.split(" ");
    for (var i = 0; i < descweatherdisplay.length; i++) {
        descweatherdisplay[i] = descweatherdisplay[i].charAt(0).toUpperCase() + descweatherdisplay[i].slice(1);
    }
    const descweather2 = descweatherdisplay.join(" ");

    const descwind = Math.round(weatherData.wind.speed.toFixed(0) * 1.609);
    weatherIcon.setAttribute("src", weatherimagesrc);
    weatherIcon.setAttribute("alt", descweather);
    weatherDesc.innerHTML = descweather2;
    windDesc.innerHTML = descwind;
}

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}