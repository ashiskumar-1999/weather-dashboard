# Project Description

A simple Dashboard to show the current weather of a city and related data like humidity and wind speed. It uses the OpenWeather API to fetch the data. A user can search for any city and fetch the weather. It also allows the user to switch between temperature units, i.e, Celsius and Fahrenheit.

# Setup Local Server
This project uses a React + Vite template as the boilerplate.  To set up this locally:

Clone the repo:
```
git clone https://github.com/ashiskumar-1999/weather-dashboard.git
```

Install dependencies
```
cd weather-dashboard
npm install
```

Create an .env file at the root of the project and paste the OpenWeather API_KEY like this:
```
VITE_APP_ID= "YOUR_OPENWEATHER_APP_ID"
```

Now, run the local server
```
npm run dev
```
You can see at http://localhost:5173/

# Tech Stack
- Typescript
- React
- Vite
- OpenWeatherAPI


