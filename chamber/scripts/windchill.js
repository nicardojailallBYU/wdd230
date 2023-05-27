
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/georgetown%20guyana?unitGroup=metric&key=7VZBR9QQ78M7G9R9HKPWV322E&contentType=json")
  .then(response => response.json())
  .then(data => {
    const temperature = data.currentConditions.temp;
    const conditions = data.currentConditions.conditions;
    const windspeed = data.currentConditions.windspeed;
    const icon = data.currentConditions.icon;

    const temperatureElement = document.getElementById('temperature');
    const conditionsElement = document.getElementById('conditions');
    const windspeedElement = document.getElementById('wind-speed');
    const iconElement = document.getElementById('weather-icon');

    temperatureElement.textContent = ` ${temperature}°C`;
    conditionsElement.textContent = ` ${conditions}`;
    windspeedElement.textContent = ` Wind Speed: ${windspeed} km/h`;

    if (iconElement) {
      iconElement.src = icon;
      iconElement.alt = 'weather-icon';
    }
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });

  
  var temp= temperature;
var wSpeed= windspeedElement.textContent;
var windchill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windchill);
document.getElementById("windChill").innerHTML= windChill;
  