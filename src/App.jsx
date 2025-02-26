import { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import SearchSection from "./components/SearchSection";
import { fetchWeather, fetchForecast } from "./services/weatherAPI";
import ForecastCard from "./components/ForecastCard";
import TemperatureUnitSelector from "./components/TemperatureUnitSelector";
import WeatherHighlights from "./components/WeatherHighlights";
import { celsiusToFahrenheit } from "./helpers/celsiusToFahrenheit";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState("Palenque");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [unit, setUnit] = useState("metric");
  console.log();

  const loadWeatherAndForecast = async (cityName) => {
    setIsLoading(true);
    setError(null);
    try {

      const currentWeather = await fetchWeather(cityName);
      setWeatherData(currentWeather);

      const forecast = await fetchForecast(cityName);
      setForecastData(forecast);
    } catch (error) {
      setError("Error al obtener los datos del clima");
    } finally {
      setIsLoading(false);
    }
  };



  useEffect(() => {
    loadWeatherAndForecast(city);
  }, [city]);

  // Ruta a las imágenes locales basadas en el código del clima
  /*   const getWeatherIcon = (iconCode) => {
      return `/weather-icons/${iconCode}.png`;
    }; */


  const formatDate = (date) => {
    const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };


  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <>
      <div>
        <div className="bg-gray-950 mx-auto overflow-hidden md:max-w-screen">
          <div className="md:flex">

            <div className="bg-slate-800 h-auto w-full object-cover md:h-screen md:w-2/5">
              <header className="flex justify-between mx-12">
                <div className="flex justify-center items-center">
                  <SearchInput onClick={() => setIsSectionOpen(true)} />
                  <SearchSection
                    isOpen={isSectionOpen}
                    onClose={() => setIsSectionOpen(false)}
                    setCity={setCity}
                  />
                </div>
                <div>
                  <img className="mt-4 mr-5 p-2" src="Icons/location.svg" alt="location" />
                </div>
              </header>

              <div>
                <img className="opacity-30" src="../public/weather-icons/fondo.png" alt="background" />
              </div>

              <div className="text-center">
                {isLoading && <p>Cargando...</p>}
                {error && <p>{error}</p>}
                {weatherData && (
                  <>
                    <div className="pb-12">
                      <span className="text-9xl text-white">
                        {unit === "metric" ? Math.floor(weatherData.main.temp) : celsiusToFahrenheit(weatherData.main.temp)}
                        <span className="text-5xl text-gray-500">°{unit === "metric" ? "C" : "F"}</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-4xl text-gray-500">
                        {weatherData.weather[0].description}
                      </span>
                    </div>
                    <div className="text-gray-500 p-4">
                      <span>Today</span>
                      <span> . </span>
                      <span>{formatDate(new Date())}</span>
                    </div>
                    <div className="flex items-center justify-center text-3xl text-gray-500 p-4">
                      <img src="./Icons/location_on.svg" alt="location" />
                      <span>{city}</span>
                    </div>
                  </>
                )}
              </div>
            </div>


            <div className="bg-slate-950 h-full w-full object-cover md:h-screen md:w-3/5 flex flex-col p-8">

              <TemperatureUnitSelector onUnitChange={handleUnitChange} />


              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {forecastData &&
                  forecastData.list
                    .filter((forecast, index) => index % 8 === 0)
                    .map((forecast, index) => (
                      <ForecastCard
                        key={index}
                        day={formatDate(forecast.dt_txt)}
                        icon={forecast.weather[0].icon}

                        tempMax={unit === "metric" ? Math.floor(forecast.main.temp_max) : celsiusToFahrenheit(forecast.main.temp_max)}
                        tempMin={unit === "metric" ? Math.floor(forecast.main.temp_min) : celsiusToFahrenheit(forecast.main.temp_min)}
                      />
                    ))}
              </div>


              {weatherData && (
                <WeatherHighlights
                  windSpeed={weatherData.wind.speed}
                  humidity={weatherData.main.humidity}
                  visibility={weatherData.visibility / 1000}
                  pressure={weatherData.main.pressure}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;