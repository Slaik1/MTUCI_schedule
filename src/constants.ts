const originLocation = document.location.origin;

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4200'
    : originLocation;
