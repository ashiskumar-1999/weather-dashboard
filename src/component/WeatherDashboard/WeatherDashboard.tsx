import styles from "./WeatherDashboard.module.css";
import type { WeatherDataProps } from "../../types";
import { Wind, Droplet } from "lucide-react";

const WeatherDashboard = ({
  cityName,
  temprature,
  feelsLikeTemprature,
  humidity,
  windSpeed,
  weatherType,
  weatherIcon,
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
            <h1 className={styles.heading}>{temprature}</h1>
            <p className={styles.text}>Feels like {feelsLikeTemprature}</p>
          </div>
        </div>
        <div className={styles.otherdata}>
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
      <div className={`${styles.map} ${styles.effect}`}></div>
      <div className={`${styles.forecast} ${styles.effect}`}></div>
    </div>
  );
};

export default WeatherDashboard;
