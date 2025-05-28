//To convert the wind speed from different unit metrics to km/h.

const convertToKmPerHour = (speed: number, unit: string) => {
  if (unit === "metric") {
    return Number((speed * 3.6).toFixed(2));
  } else {
    return Number((speed * 1.60934).toFixed(2));
  }
};

export default convertToKmPerHour;
