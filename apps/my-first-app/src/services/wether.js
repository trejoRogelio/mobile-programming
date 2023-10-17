import config from '../../../../config'; 

const url = 'https://weatherapi-com.p.rapidapi.com';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': config.apiKey,
    'X-RapidAPI-Host': config.apiHost,
  },
};

export async function getWeather() {
  return currentWether;
}

export async function getWeatherByName(cityName) {
  const BASE_URL = new URL('/current.json', url);
  BASE_URL.searchParams.append('q', cityName);
  console.log(BASE_URL.href);
  const resp = await fetch(BASE_URL.href, options);
  return resp.json();
}
