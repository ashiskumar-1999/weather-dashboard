import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./component/SearchBar/SearchBar";
import WeatherDashboard from "./component/WeatherDashboard/WeatherDashboard";
import { useWeather } from "./context/WeatherContext";

function App() {
  const [cityName, setCityName] = useState("");
  const { weatherData, setWeatherData } = useWeather();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const cityToFetch = cityName || localStorage.getItem("lastCity");
        if (!cityToFetch) return;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityToFetch}&appid=${
            import.meta.env.VITE_APP_ID
          }&units=metric`
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
  }, [cityName]);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCityName(e.target.value);
  };

  return (
    <>
      <SearchBar cityName={cityName} onChange={handleCityChange} />
      {weatherData && weatherData.main && weatherData.wind && (
        <WeatherDashboard
          cityName={weatherData.name}
          weatherType={weatherData.weather[0].main}
          weatherIcon={weatherData.weather[0].icon}
          temprature={weatherData.main.temp}
          feelsLikeTemprature={weatherData.main.feels_like}
          humidity={weatherData.main.humidity}
          windSpeed={weatherData.wind.speed}
        />
      )}
    </>
  );
}

export default App;
