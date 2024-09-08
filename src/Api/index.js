import axios from 'axios';

const PRODUCT_OPEN_API = process.env.REACT_APP_PRODUCT_OPEN_API;
const LOCAL_BACKEND = process.env.REACT_APP_LOCAL_BACKEND;
const SERVICE_BACKEND = process.env.REACT_APP_SERVICE_BACKEND;

export const productOpenApi = axios.create({
  baseURL: `${PRODUCT_OPEN_API}`,
});

export const serviceApi = axios.create({
  baseURL: `${LOCAL_BACKEND}/api`,
  withCredentials: true,
});
