const apiKey = "bc1a570383e873b648e09b070e8d3c25"; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        document.getElementById("weatherResult").innerHTML = `<p>City not found.</p>`;
        return;
      }
      const weatherHtml = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      `;
      document.getElementById("weatherResult").innerHTML = weatherHtml;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p>Error fetching data.</p>`;
      console.error(error);
    });
}
