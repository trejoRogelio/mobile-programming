export const regexInput = /^[a-zA-Z\s]{3,30}$/;

export const vars = {
  weatherURI: process.env.EXPO_PUBLIC_API_URL,
  weatherKey: process.env.EXPO_PUBLIC_API_KEY,
  weatherHost: process.env.EXPO_PUBLIC_HOST_WEATHER,
};
