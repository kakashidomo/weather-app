import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY_UNO; 




const API_KEY = apiKey; 
const BASE_URL_WEATHER = "https://api.openweathermap.org/data/2.5/weather";
const BASE_URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast";


export const fetchWeather = async (cityName) => {
  
  try {
    const response = await axios.get(BASE_URL_WEATHER, {

      params: {
        q: cityName,
        units: "metric", 
        appid: API_KEY,
      },
    }); 
    return response.data;
  } catch (error) {
    throw new Error("No se pudo obtener los datos del clima actual");
  }
};


export const fetchForecast = async (cityName) => {

  try {
    const response = await axios.get(BASE_URL_FORECAST, {
      params: {
        q: cityName,
        units: "metric", 
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("No se pudo obtener el pronóstico del clima");
  }
};