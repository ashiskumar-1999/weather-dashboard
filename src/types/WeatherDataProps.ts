export type WeatherDataProps = {
  cityName: string;
  temprature: number;
  feelsLikeTemprature: number;
  humidity: number;
  windSpeed: number;
  weatherIcon: string;
  weatherType: string;
  unitMetric: string;
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

export type WeatherForeCastProps = {
  list: {
    dt: number;
    main: {
      temp: number;
    };
    weather: {
      main: string;
      icon: string;
    };
  }[];
};
