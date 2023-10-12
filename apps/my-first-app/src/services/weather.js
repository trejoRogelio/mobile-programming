import currentWeather from '../api/source/data.json';
import errorWeather from '../api/source/error.json';

const url= process.env.EXPO_PUBLIC_WEATHER_API_URL;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.EXPO_PUBLIC_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.EXPO_PUBLIC_RAPID_API_HOST
    }
};

export async function getWeather() {
    return currentWeather;
}

export async function getWeatherByName(cityName) {
    const BASE_URL = new URL('/current.json', url);
    BASE_URL.searchParams.append('q', cityName)
    console.log(BASE_URL.href)
    const resp = await fetch(BASE_URL.href, options);
    return resp.json();
}