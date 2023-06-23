const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#conditions');
const currentWindSpeed = document.querySelector('#wind-speed');
const windChillResult = document.querySelector('#wind-chill');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Guyana&units=imperial&appid=697da629c5ec240bbf898bcce7f5855d";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

function convertToKmph(mph) {
  return mph * 1.60934;
}

function calculateWindChill(temperatureFahrenheit, windSpeedMph) {
  if (temperatureFahrenheit <= 50 && windSpeedMph > 3.0 * 1.60934) {
    const windChill = 35.74 + (0.6215 * temperatureFahrenheit) - (35.75 * Math.pow(windSpeedMph, 0.16)) + (0.4275 * temperatureFahrenheit * Math.pow(windSpeedMph, 0.16));
    return Math.round(windChill);
  } else {
    return 'N/A';
  }
}

function displayResults(weatherData) {
  const windSpeedMph = weatherData.wind.speed;
  const temperatureFahrenheit = weatherData.main.temp;
  const windChill = calculateWindChill(temperatureFahrenheit, windSpeedMph);

  const temperatureCelsius = convertToCelsius(temperatureFahrenheit);
  const windSpeedKmph = convertToKmph(windSpeedMph);

  currentTemp.innerHTML = temperatureCelsius.toFixed(0) + "°C";
  currentWindSpeed.innerHTML = "Wind Speed: " + windSpeedKmph.toFixed(0) + " km/h";
  captionDesc.innerHTML = weatherData.weather[0].description;

  if (windChill !== 'N/A') {
    windChillResult.innerHTML = "Wind Chill: " + windChill.toFixed(0) + "°C";
  } else {
    windChillResult.innerHTML = "Wind Chill: N/A";
  }

  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
  weatherIcon.setAttribute('src', iconUrl);
  weatherIcon.setAttribute('alt', "weather-img");
  
}

apiFetch();