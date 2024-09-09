import axios from 'axios';

const LOCAL_BACKEND = process.env.REACT_APP_LOCAL_BACKEND;
const SERVICE_BACKEND = process.env.REACT_APP_SERVICE_BACKEND;
const OPEN_API_SERVICE_KEY = process.env.REACT_APP_OPEN_API_SERVICE_KEY;

export const productOpenApi = axios.create({
  withCredentials: true,
  params: {
    service: OPEN_API_SERVICE_KEY
  }
});

export const serviceApi = axios.create({
  baseURL: `${LOCAL_BACKEND}/api`,
  withCredentials: true
});
