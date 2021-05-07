export const apiKey = '373a59a53a6e12d6492b8823e6963f5f';

export const dailyWeather =  new URL("https://api.openweathermap.org/data/2.5/onecall?");
export const currentWeather = new URL("https://api.openweathermap.org/data/2.5/onecall?");

export async function getCurrentWeather(lat, lon) {
    const params = {
        appid: apiKey,
        lat: lat,
        lon: lon,
        exclude: 'minutely,hourly,daily',
        units: 'metric',
    };
    let url = new URL(currentWeather.toString());
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url);
    const json = await response.json();

    return json;
}

export async function getHourlyWeather(lat,lon) {
    const params = {
        appid: apiKey,
        lat: lat,
        lon: lon,
        exclude: 'current,minutely,daily',
        units: 'metric',
    }
    let url = new URL(dailyWeather.toString());
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url);
    const json = await response.json();

    return json;
}

export async function getDailyWeather(lat, lon) {
    const params = {
        appid: apiKey,
        lat: lat,
        lon: lon,
        exclude: 'current,minutely,hourly',
        units: 'metric',
    };
    let url = new URL(dailyWeather.toString());
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url);
    const json = await response.json();

    return json;
}
