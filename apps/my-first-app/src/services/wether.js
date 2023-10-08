import currentWether from '../api/source/data.json';
import { vars } from '../config/constants';

const url = vars.weatherURI;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': vars.weatherKey,
    'X-RapidAPI-Host': vars.weatherHost,
  },
};

export async function getWether() {
  return currentWether;
}

export async function getWetherByName(cityName) {
  const BASE_URL = new URL('/current.json', url);
  BASE_URL.searchParams.append('q', cityName);
  console.log(BASE_URL.href);
  const resp = await fetch(BASE_URL.href, options);
  return resp.json();
}
