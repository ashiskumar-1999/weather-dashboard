import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./component/SearchBar/SearchBar";
import WeatherDashboard from "./component/WeatherDashboard/WeatherDashboard";
import { useWeather } from "./context/WeatherContext";
import type { WeatherForeCastProps } from "./types";
import convertToKmPerHour from "./utils/convertToKmPerHour";
import { useDebounce } from "./utils/useDebounce";

function App() {
  const [cityName, setCityName] = useState("");
  const [isCelcius, setIsCelcius] = useState(true);
  const { weatherData, setWeatherData } = useWeather();
  const [foreCast, setForeCast] = useState<WeatherForeCastProps>(); //StateVariable for the forecast
  const unit = isCelcius ? "metric" : "imperial"; // Assign the unit value to celcius/Farenhit
  const debouncedCityName = useDebounce(cityName, 700);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const cityToFetch =
          debouncedCityName || localStorage.getItem("lastCity");
        if (!cityToFetch) return;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityToFetch}&appid=${
            import.meta.env.VITE_APP_ID
          }&units=${unit}`
        );
        const data = await response.json();

        if (data.cod === 200) {
          setWeatherData(data);
          localStorage.setItem("lastCity", cityToFetch);
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();

    //set the interval to implement the API polling
    const Interval = setInterval(() => {
      console.log("API is fetching after 30 sec");
      fetchWeather();
    }, 30000);

    //clean up the interval to avoid any errors further.
    return () => {
      clearInterval(Interval);
    };
  }, [debouncedCityName, isCelcius]);

  //TODO: This is to be implemented.

  //useEffect to call the forecast api for 5 days.
  useEffect(() => {
    const fetchForecast = async () => {
      const cityToFetch = debouncedCityName || localStorage.getItem("lastCity");
      try {
        const foreCastResult = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityToFetch}&cnt=5&appid=${
            import.meta.env.VITE_APP_ID
          }&units=metric`
        );
        const forecastData = await foreCastResult.json();
        if (forecastData.cod === "200") {
          setForeCast(forecastData);
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchForecast();
  }, [debouncedCityName, isCelcius]);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCityName(e.target.value);
  };

  return (
    <>
      <SearchBar
        cityName={cityName}
        onChange={handleCityChange}
        isCelcius={isCelcius}
        onClick={() => setIsCelcius(!isCelcius)}
      />

      {weatherData && weatherData.main && weatherData.wind && (
        <WeatherDashboard
          cityName={weatherData.name}
          weatherType={weatherData.weather[0].main}
          weatherIcon={weatherData.weather[0].icon}
          temprature={weatherData.main.temp}
          feelsLikeTemprature={weatherData.main.feels_like}
          humidity={weatherData.main.humidity}
          windSpeed={convertToKmPerHour(weatherData.wind.speed, unit)}
          unitMetric={unit}
          foreCastData={foreCast?.list}
        />
      )}
    </>
  );
}

export default App;
