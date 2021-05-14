const API_KEY = [
   '373a59a53a6e12d6492b8823e6963f5f',
   'dcc848b9f88fd641462e8170356f3877',
];

const FORECAST_WEATHER =  new URL("https://api.openweathermap.org/data/2.5/onecall?");
const CURRENT_WEATHER = new URL("https://api.openweathermap.org/data/2.5/onecall?");

const AIR_QUALITY = new URL("https://api.openweathermap.org/data/2.5/air_pollution?");

export const WEATHER_ICON = new URL("https://openweathermap.org/img/wn/");
export const WEATHER_ICON_FORMAT = "@2x.png";

// Fetch functions
export async function getCurrentWeather(lat, lon) {
   const params = {
      appid: API_KEY[1],
      lat: lat,
      lon: lon,
      exclude: 'minutely,hourly,daily',
      units: 'metric',
   };
   let currentWeather = new URL(CURRENT_WEATHER.toString());
   currentWeather.search = new URLSearchParams(params).toString();

   const response = await fetch(currentWeather);
   const json = await response.json();

   return json;
}

export async function getHourlyWeather(lat,lon) {
   const params = {
      appid: API_KEY[1],
      lat: lat,
      lon: lon,
      exclude: 'current,minutely,daily',
      units: 'metric',
   }
   let hourlyWeather = new URL(FORECAST_WEATHER.toString());
   hourlyWeather.search = new URLSearchParams(params).toString();

   const response = await fetch(hourlyWeather);
   const json = await response.json();

   return json;
}

export async function getDailyWeather(lat, lon) {
   const params = {
      appid: API_KEY[1],
      lat: lat,
      lon: lon,
      exclude: 'current,minutely,hourly',
      units: 'metric',
   };
   let dailyWeather = new URL(FORECAST_WEATHER.toString());
   dailyWeather.search = new URLSearchParams(params).toString();

   const response = await fetch(dailyWeather);
   const json = await response.json();

   return json;
}

export async function getCurrentAirQuality(lat, lon) {
   const params = {
      appid: API_KEY[1],
      lat: lat,
      lon: lon,
   };
   let airQuality = new URL(AIR_QUALITY.toString());
   airQuality.search = new URLSearchParams(params).toString();

   const response = await fetch(airQuality);
   const json = await response.json();

   return json;
}
