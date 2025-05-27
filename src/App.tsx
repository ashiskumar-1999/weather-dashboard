import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./component/SearchBar/SearchBar";
import WeatherDashboard from "./component/WeatherDashboard/WeatherDashboard";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState<any>();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const result = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
            import.meta.env.VITE_APP_ID
          }&units=metric`
        );
        const data = await result.json();
        console.log("Result", data.name);
        setWeatherData(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchWeather();
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
