const temperatureElement = document.getElementById("temperature");
const weatherIcon = document.getElementById("weather-icon");
const conditionsElement = document.getElementById("conditions");
const humidityElement = document.getElementById("humidity");
const forecastElement = document.getElementById("forecast");


const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=697da629c5ec240bbf898bcce7f5855d";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=697da629c5ec240bbf898bcce7f5855d";

async function fetchWeatherData() {
  try {
    // Fetch current weather data
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      const temperatureFahrenheit = data.main.temp;
      const temperatureCelsius = (temperatureFahrenheit - 32) * (5 / 9);
      temperatureElement.textContent = temperatureCelsius.toFixed(1) + "°C";
      const conditions = data.weather[0].description;
      conditionsElement.textContent = conditions;
      const humidity = data.main.humidity;
      humidityElement.textContent = "Humidity: " + humidity + "%";

      // Get weather icon
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
      weatherIcon.src = iconUrl;
      weatherIcon.alt = conditions ;
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function fetchForecastData() {
  try {
    // Fetch 3-day forecast data
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      const forecastList = data.list; // Get all forecast entries

      // Calculate the next three dates
      const currentDate = new Date();
      const nextDates = [
        new Date(currentDate.getTime() + 24 * 60 * 60 * 1000),
        new Date(currentDate.getTime() + 2 * 24 * 60 * 60 * 1000),
        new Date(currentDate.getTime() + 3 * 24 * 60 * 60 * 1000),
      ];

      // Clear existing forecast elements
      forecastElement.innerHTML = "";

      let forecastDates = [];
      forecastList.forEach((forecast) => {
        const forecastDate = new Date(forecast.dt * 1000);

        // Check if the forecast date matches any of the next three dates and hasn't been added already
        if (
          nextDates.some((date) => date.toDateString() === forecastDate.toDateString()) &&
          !forecastDates.includes(forecastDate.toDateString())
        ) {
          const temperatureFahrenheit = forecast.main.temp;
          const temperatureCelsius = (temperatureFahrenheit - 32) * (5 / 9);
          const humidity = forecast.main.humidity;
          const conditions = forecast.weather[0].description;
          const iconCode = forecast.weather[0].icon;
          const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

          const forecastItem = document.createElement("div");
          forecastItem.classList.add("forecast-item");

          const dateElement = document.createElement("p");
          dateElement.textContent = forecastDate.toDateString();
          forecastItem.appendChild(dateElement);

          const temperatureElement = document.createElement("p");
          temperatureElement.textContent = `${temperatureCelsius.toFixed(1)}°C`;
          forecastItem.appendChild(temperatureElement);

          const humidityElement = document.createElement("p");
          humidityElement.textContent = `Humidity: ${humidity}%`;
          forecastItem.appendChild(humidityElement);

          const conditionsElement = document.createElement("p");
          conditionsElement.textContent = conditions;
          forecastItem.appendChild(conditionsElement);

          const iconElement = document.createElement("img");
          iconElement.src = iconUrl;
          iconElement.alt = conditions + " images";
          forecastItem.appendChild(iconElement);

          forecastElement.appendChild(forecastItem);

          forecastDates.push(forecastDate.toDateString());
        }
      });
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}






fetchWeatherData();
fetchForecastData();