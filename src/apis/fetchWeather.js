import data from "../data.js";

const fetchWeather = async () => {
  try {
    const response = await fetch(data.weatherURL);
    if (response.ok) {
      const weatherData = await response.json();
     return weatherData
    } else {
      throw new Error('Error occurred while fetching weather');
    }
  } catch (error) {
    console.error(error);
  }
};

export default fetchWeather;