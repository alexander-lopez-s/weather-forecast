import handleWeather from "../handlers/handleWeather.js";

const loadCardWeather = () => {
    window.addEventListener('load', handleWeather);
}

export default loadCardWeather;