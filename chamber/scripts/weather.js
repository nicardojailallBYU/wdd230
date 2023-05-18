
const apiKey = 'YOUR_API_KEY';
const location = 'RR8M+F6M, A&B, Water St, Georgetown';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;


async function getWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    
    const weatherElement = document.getElementById('weather');
    weatherElement.innerHTML = `Temperature: ${temperature} K<br>Weather: ${weatherDescription}`;
  } catch (error) {
    console.log('Error:', error);
  }
}
getWeather();