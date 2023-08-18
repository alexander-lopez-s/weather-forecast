import fetchWeather from "../apis/fetchWeather.js";
import createWeatherCard from "../components/createWeatherCard.js";
import dom from "../dom.js";

const handleWeather = async () => {
  try {
    // Call fetchWeather function
    const weatherData = await fetchWeather(); 
    // Pass weatherData to the component
    const newCard = createWeatherCard(weatherData); 
    // Append the newCard to the container
    dom.container.appendChild(newCard); 
  } catch (error) {
    console.error(error);
  }
};

export default handleWeather;
