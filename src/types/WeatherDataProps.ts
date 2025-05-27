export type WeatherDataProps = {
  cityName: string;
  temprature: number;
  feelsLikeTemprature: number;
  humidity: number;
  windSpeed: number;
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
