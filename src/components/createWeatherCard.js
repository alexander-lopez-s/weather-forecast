const createWeatherCard = (weatherData) => {
  const hours = weatherData.hourly.time;
  const temperatures = weatherData.hourly.temperature_2m;

  const weatherCard = document.createElement('div');

  const currentDate = new Date();
  const dateDisplay = document.createElement('div');
  dateDisplay.textContent = currentDate.toDateString();
  dateDisplay.classList.add('date-display');

  weatherCard.appendChild(dateDisplay);

  const headerRow = document.createElement('div');
  headerRow.classList.add('header-row');

  const hourHeader = document.createElement('div');
  hourHeader.textContent = 'Hour';
  hourHeader.classList.add('header-item');

  const tempHeader = document.createElement('div');
  tempHeader.textContent = 'Temperature';
  tempHeader.classList.add('header-item');

  headerRow.appendChild(hourHeader);
  headerRow.appendChild(tempHeader);

  weatherCard.appendChild(headerRow);

  const weatherEmojis = ['☀️', '🌤️', '⛅', '⛈️',]; 

  for (let i = 0; i < hours.length; i++) {
    const date = new Date(hours[i]);
    const hour = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    const temperature = temperatures[i].toFixed(1);
    const randomEmoji = weatherEmojis[Math.floor(Math.random() * weatherEmojis.length)]; 

    const hourElement = document.createElement('div');
    hourElement.textContent = hour;
    hourElement.classList.add('data-item');

    const tempElement = document.createElement('div');
    tempElement.textContent = `${randomEmoji} ${temperature} °C`; 
    tempElement.classList.add('data-item');

    const dataPoint = document.createElement('div');
    dataPoint.classList.add('data-point');
    dataPoint.appendChild(hourElement);
    dataPoint.appendChild(tempElement);

    weatherCard.appendChild(dataPoint);
  }

  return weatherCard;
};

export default createWeatherCard;
