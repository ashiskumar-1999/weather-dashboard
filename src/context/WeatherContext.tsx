// context/WeatherContext.tsx
import React, { createContext, useContext, useState } from "react";
import type { WeatherApiProps } from "../types";

type WeatherContextType = {
  weatherData: WeatherApiProps | null;
  setWeatherData: (data: WeatherApiProps) => void;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [weatherData, setWeatherData] = useState<WeatherApiProps | null>(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
