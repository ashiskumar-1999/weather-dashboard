import styles from "./WeatherDashboard.module.css";
import type { WeatherDataProps } from "../../types";
import { Wind, Droplet } from "lucide-react";
import convertToLocalDate from "../../utils/convertToLocalDate";

const WeatherDashboard = ({
  cityName,
  temprature,
  feelsLikeTemprature,
  humidity,
  windSpeed,
  weatherType,
  weatherIcon,
  unitMetric,
  foreCastData,
  searchHistory,
  onClick,
}: WeatherDataProps) => {
  return (
    <div className={styles.gridContainer}>
      <div className={`${styles.currentWeather} ${styles.effect}`}>
        <p className={styles.text}>Current Weather</p>
        <h2 className={styles.heading}>{cityName}</h2>
        <div className={styles.temprature}>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
              alt="weather-icon"
              className={styles.image}
            />
            <p className={styles.text}>{weatherType}</p>
          </div>
          <div>
            <h1 className={styles.heading}>
              {temprature}
              {unitMetric === "metric" ? "℃" : "℉"}
            </h1>
            <p className={styles.text}>Feels like {feelsLikeTemprature}</p>
          </div>
        </div>
        <div className={styles.weatherForcastDetail}>
          <div>
            <Wind className={styles.text} />
            <h3 className={styles.text}>{windSpeed} km/h</h3>
          </div>
          <div>
            <Droplet className={styles.text} />
            <h3 className={styles.text}>{humidity}%</h3>
          </div>
        </div>
      </div>
      <div className={`${styles.glassEffect}`}>
        <div className={styles.forecastContainer}>
          {foreCastData?.map((data: any, index) => (
            <div key={index + 1}>
              <p className={styles.text}>{convertToLocalDate(data.dt)}</p>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="weather-icon"
                className={styles.image}
              />
              <p className={styles.text}>{data.weather[0].main}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.forecast} ${styles.effect}`}>
        <h1 className={styles.heading}>Searched City</h1>
        {searchHistory &&
          searchHistory.map((data, index) => (
            <li className={styles.list}>
              <button
                key={index + 1}
                className={styles.button}
                onClick={() => onClick(data)}
              >
                {data.toUpperCase()}
              </button>
            </li>
          ))}
      </div>
    </div>
  );
};

export default WeatherDashboard;
