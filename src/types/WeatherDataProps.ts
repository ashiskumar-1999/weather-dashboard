export type WeatherDataProps = {
  cityName: string;
  temprature: number;
  feelsLikeTemprature: number;
  humidity: number;
  windSpeed: number;
  weatherIcon: string;
  weatherType: string;
};

export type WeatherApiProps = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
};
