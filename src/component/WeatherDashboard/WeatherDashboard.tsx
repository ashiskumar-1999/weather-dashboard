import styles from "./WeatherDashboard.module.css";
import type { WeatherDataProps } from "../../types";

const WeatherDashboard = ({
  cityName,
  temprature,
  feelsLikeTemprature,
  humidity,
  windSpeed,
}: WeatherDataProps) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.currentWeather}>
        <h2 className={styles.text}>{cityName}</h2>
      </div>
      <div className={styles.map}>
        <h1 className={styles.text}>Temperature:{temprature}</h1>
        <p className={styles.text}>Feels like {feelsLikeTemprature}</p>
      </div>
      <div className={styles.forecast}>
        <h3 className={styles.text}>Humidity: {humidity}</h3>
        <h3 className={styles.text}>Wind Speed: {windSpeed}</h3>
      </div>
    </div>
  );
};

export default WeatherDashboard;
